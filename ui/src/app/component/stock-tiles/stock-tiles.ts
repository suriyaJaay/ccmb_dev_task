import { Component, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { StockModalData } from '../../modals/stock.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-tiles',
  imports: [CommonModule],
  templateUrl: './stock-tiles.html',
  styleUrl: './stock-tiles.scss',
  standalone: true,
})
export class StockTiles {
  @Input() stockData!: StockModalData;
  @Input() activeStocks = true;
  @Output() toggle = new EventEmitter<string>();
  turnOffStockUpdate?: StockModalData;

  onToggle() {
    this.activeStocks
      ? (this.turnOffStockUpdate = { ...this.stockData })
      : (this.turnOffStockUpdate = undefined);
    this.activeStocks = !this.activeStocks;
    this.toggle.emit(this.stockData.brand);
  }
}
