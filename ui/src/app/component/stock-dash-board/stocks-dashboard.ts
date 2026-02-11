import { Component, OnDestroy, computed, effect } from '@angular/core';
import { StocksApi } from '../../service/stocksApi';
import { StockModalData } from '../../modals/stock.modal';
import { CommonModule } from '@angular/common';
import { StockTiles } from '../stock-tiles/stock-tiles';

@Component({
  selector: 'app-stocks-dashboard',
  imports: [CommonModule, StockTiles],
  templateUrl: './stocks-dashboard.html',
  styleUrl: './stocks-dashboard.scss',
  standalone: true,
})
export class StocksDashBoard implements OnDestroy {
  activeMap: Record<string, boolean> = {};

  stocksSignal!: () => StockModalData[];
  aliveStocks!: () => StockModalData[];

  initializeActiveStocks = effect(() => {
    if (!this.stocksSignal) return;
    const stocks = this.stocksSignal();
    stocks.forEach((stock) => {
      if (!(stock.brand in this.activeMap)) {
        this.activeMap[stock.brand] = true;
      }
    });
  });

  constructor(private stockService: StocksApi) {
    this.stockService.initiateSocketConnection();
    this.stocksSignal = this.stockService.snlStockData;

    this.aliveStocks = computed(() =>
      this.stocksSignal().filter((stock) => this.activeMap[stock.brand]),
    );
  }

  toggle(symbol: string) {
    this.activeMap[symbol] = !this.activeMap[symbol];
  }

  ngOnDestroy() {
    this.stockService.stopSocketConnetion();
  }
}
