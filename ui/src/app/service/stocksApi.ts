import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, last, single } from 'rxjs';
import { StockModalData } from '../modals/stock.modal';

@Injectable({
  providedIn: 'root',
})
export class StocksApi {
  private _ws: WebSocket | null = null;

  // predefinedStocks = ['AMZN', 'META', 'NVDA', 'NFLX', 'INTC', "AMZN", "META", "NVDA", "NFLX", "INTC"];
  predefinedStocks = [
    'BINANCE:BTCUSDT',
    'BINANCE:ETHUSDT',
    'BINANCE:BNBUSDT',
    'BINANCE:XRPUSDT',
    'BINANCE:ADAUSDT',
  ];

  snlStockData = signal<StockModalData[]>(
    this.predefinedStocks.map((stck) => ({
      brand: stck,
      price: 0,
      high: 0,
      low: 0,
      wk52High: 0,
      wk52Low: 0,
      updatePrice: 0,
      updatePricePercent: 0,
      volume: 0,
      lastTradeTime: '',
    })),
  );

  initiateSocketConnection() {
    this._ws = new WebSocket('ws://localhost:3000/');
    this._ws.onmessage = (e) => {
      const resp = JSON.parse(e.data);

      if (resp.type === 'trade' && resp.data && resp.data.length > 0) {
        const latestValues = [...this.snlStockData()];

        resp.data.forEach((trade: any) => {
          if (!this.predefinedStocks.includes(trade.s)) return;

          const idx = latestValues.findIndex((s) => s.brand === trade.s);

          const enriched: StockModalData = {
            brand: trade.s,
            price: trade.p,
            high: 0,
            low: 0,
            wk52High: 0,
            wk52Low: 0,
            updatePrice: idx >= 0 ? trade.p - latestValues[idx].price : 0,
            updatePricePercent:
              idx >= 0 && latestValues[idx].price !== 0
                ? ((trade.p - latestValues[idx].price) / latestValues[idx].price) * 100
                : 0,
            volume: trade.v ?? 0,
            lastTradeTime: trade.t ? new Date(trade.t).toLocaleTimeString() : '',
          };

          if (idx >= 0) {
            latestValues[idx] = { ...latestValues[idx], ...enriched };
          } else {
            latestValues.push(enriched);
          }
        });

        this.snlStockData.set(latestValues);
      }
    };
  }

  stopSocketConnetion() {
    if (this._ws) {
      this._ws.close();
    }
  }
}
