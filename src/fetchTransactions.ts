
import axios from "axios";
import { TrustLessTradeHistoriesResponse, TrustLessFetchPriceResponse } from './types';

export const fetchPriceContract = async (contractAddr: string) => {
    const url = `https://dapp.trustless.computer/dapp/api/swap/token/report?address=${contractAddr}`;

    const response = await axios.get(url);
    const trustlessResponse = response.data as TrustLessFetchPriceResponse;

    if (!trustlessResponse.status || trustlessResponse.error || trustlessResponse.data.length === 0) {
        throw new Error("Fetch error")
    }
    return trustlessResponse.data[0];
}
export const fetchTransactions = async (options: {
  contractAddr: string;
  lastTx: string;
}) => {
  const limit = 25; // We load only 25 max tx
  const page = 1;

  const url = `https://dapp.trustless.computer/dapp/api/swap/pair/trade-histories?contract_address=${options.contractAddr}&limit=${limit}&page=${page}`;
  const response = await axios.get(url);
  const trustlessResponse = response.data as TrustLessTradeHistoriesResponse;
  if (trustlessResponse.error || !trustlessResponse.status) {
    throw new Error("Fetch error")
  }
  return trustlessResponse.data;
};
