import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StockModalData } from '../../modals/stock.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-tiles',
  imports: [CommonModule],
  templateUrl: './stock-tiles.html',
  styleUrl: './stock-tiles.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTiles {
  @Input() stockData!: StockModalData;
  @Input() activeStocks = true;
  @Output() toggle = new EventEmitter<string>();

  turnOffStockUpdate?: StockModalData;

  onToggle() {
    if (this.activeStocks) {
      // going OFF → freeze current values
      this.turnOffStockUpdate = { ...this.stockData };
    } else {
      // going ON → clear snapshot
      this.turnOffStockUpdate = undefined;
    }
    this.toggle.emit(this.stockData.brand);
  }
}
