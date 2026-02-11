export interface StockModalData {
  brand: string;
  price: number;
  high: number;
  low: number;
  wk52High: number;
  wk52Low: number;
  updatePrice?: number;
  updatePricePercent?: number;
  volume?: number;
  lastTradeTime?: string;
}
