import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksDashBoard implements OnInit, OnDestroy {
  activeMap: Record<string, boolean> = {};
  stocksSignal!: () => StockModalData[];

  constructor(private stockService: StocksApi) {
    this.stockService.initiateSocketConnection();
    this.stocksSignal = this.stockService.snlStockData;
  }

  toggle(symbol: string) {
    this.activeMap[symbol] = !this.activeMap[symbol];
  }
  ngOnInit(): void {
    const stcks = this.stocksSignal();
    stcks.forEach((stck) => {
      if (!(stck.brand in this.activeMap)) {
        this.activeMap[stck.brand] = true;
      }
    });
  }
  ngOnDestroy() {
    this.stockService.stopSocketConnetion();
  }
}
