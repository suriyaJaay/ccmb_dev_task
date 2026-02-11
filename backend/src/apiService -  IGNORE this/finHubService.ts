import axios from "axios";

import { environment } from "../appConfig/environment";
import { StocksModal } from "../modals - IGNORE this/ResponseModal";

const predefinedStocks = ["AAPL", "GOOGL", "MSFT", "TSLA"];

export async function getPredefinedStockInfo(
  stck: string,
): Promise<StocksModal> {
  const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${stck}&token=${environment.FINHUB_API_KEY}`;
  const { data } = await axios.get(apiUrl);

  return {
    brand: stck,
    price: data.c,
    high: data.h,
    low: data.l,
    wk52High: data.h52,
    wk52Low: data.l52,
  };
}

export async function getStocks(): Promise<StocksModal[]> {
  return Promise.all(predefinedStocks.map(getPredefinedStockInfo));
}
