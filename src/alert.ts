import twilio from "twilio";
import { PeriodAlert } from "./index.d";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendWhatsappAlert = async (message: string) => {
  await client.messages.create({
    body: message,
    from: process.env.TWILIO_NB_FROM as string,
    to: process.env.TWILIO_NB_TO as string,
  });
};

export const sendAlert = async (alert: {
  symbol: string;
  oldPrice: number;
  newPrice: number;
  percentage: number;
  period: PeriodAlert;
}) => {
  if (process.env.TWILIO_AUTH_TOKEN) {
    await sendWhatsappAlert(
      alert.period === PeriodAlert.realTime
        ? `🚨 Price Alert: $${alert.symbol} 🚨\n💥 Real-time ! 💥\n$${alert.symbol} price drop of -${alert.percentage}%!\nBefore: ${alert.oldPrice}\nCurrent: ${alert.newPrice}`
        : `🚨 Price Alert: $${alert.symbol} 🚨\n💥 One Hour Time ! 💥\n$${alert.symbol} price drop of -${alert.percentage}%!\nBefore: ${alert.oldPrice}\nCurrent: ${alert.newPrice}`
    );
  }
  if (process.env.DISCORD_TOKEN) {
    // @TODO Discord notification
  }
};
