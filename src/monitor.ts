import { sendWhatsappAlert } from './alert';
import { Tokens, contracts } from './contracts';
import { fetchPriceContract } from './fetchTransactions';

const MINUTE = 1000 * 60;

const calculatePercentageDifference = (num1: number, num2: number) => {
    const difference = Math.abs(num1 - num2);
    const percentageDifference = Math.round((difference / num1) * 100);
    const status = num2 > num1 ? "UP" : "DOWN";
    return { percentageDifference, status };
  };

  const isTimeDifferenceGreaterThanOneHour = (date1: Date, date2: Date): boolean => {
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return diffInHours > 1;
  };

const startMonitorForToken = async (contractAddr: string) => {
    const contractData = await fetchPriceContract(contractAddr);
    let priceToken = contractData.usd_price;
    let priceLastHour = contractData.usd_price;
    let priceLastHourUpdatedAt = new Date();
    let priceTokenToBeUpdated = -1;

    setInterval(async () => {
         priceTokenToBeUpdated = (await fetchPriceContract(contractAddr)).usd_price;
         const percentageDifferenceFast = calculatePercentageDifference(priceToken, priceTokenToBeUpdated);

         if (percentageDifferenceFast.status === 'DOWN' && percentageDifferenceFast.percentageDifference >= 10 ) {
            await sendWhatsappAlert(
                `
                🚨 Price Alert: CryptoCurrency ${contractData.symbol} 🚨
                💥 Price Drop Real-time ! 💥
                CryptoCurrency ${contractData.symbol} has experienced a significant price drop of -${percentageDifferenceFast.percentageDifference}%! 😱
                Keep an eye on the market and take advantage of this opportunity! 📈📉
                `
            );
         }

         if (isTimeDifferenceGreaterThanOneHour(priceLastHourUpdatedAt, new Date())) {
            const percentageDifferenceSlow = calculatePercentageDifference(priceToken, priceTokenToBeUpdated);

            if (percentageDifferenceSlow.status === 'DOWN' && percentageDifferenceSlow.percentageDifference >= 10 ) {
                await sendWhatsappAlert(
                    `
                    🚨 Price Alert: CryptoCurrency ${contractData.symbol} 🚨
                    💥 Price Drop ~1 hour time ! 💥
                    CryptoCurrency ${contractData.symbol} has experienced a significant price drop of -${percentageDifferenceSlow.percentageDifference}%! 😱
                    `
                );
             }
    
            priceLastHour = priceTokenToBeUpdated;
            priceLastHourUpdatedAt = new Date();
         }

         priceToken = priceTokenToBeUpdated;
    }, MINUTE * 3);
};

export const monitor = async () => {
    console.log('╔════════════════════════════════════════════════╗');
    console.log('║           Starting monitoring BRC-20 Tokens    ║');
    console.log('╚════════════════════════════════════════════════╝');

    let nbTokens = 0;
    Object.keys(contracts).forEach((k) => {
        console.log(`Monitoring of $${k}\tis ${contracts[k as Tokens].alerts.allTransactions ? '✅' : '❌'}`);
        if (contracts[k as Tokens].alerts.allTransactions) {
            nbTokens++;
            startMonitorForToken(contracts[k as Tokens].addr);
        }
    });
    console.log('\n\n');
    console.log('╔═════════════════════════════════════╗');
    console.log(`          Fetching informations `);
    console.log('╚═════════════════════════════════════╝');
};