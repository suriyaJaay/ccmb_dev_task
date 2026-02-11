import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import { CcmpHeader } from './shared/ccmp-header/ccmp-header';
import { CcmpFooter } from './shared/ccmp-footer/ccmp-footer';
import { StocksDashBoard } from './component/stock-dash-board/stocks-dashboard';

@Component({
  selector: 'app-root',
  imports: [StocksDashBoard, CcmpHeader, CcmpFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ui');
}
