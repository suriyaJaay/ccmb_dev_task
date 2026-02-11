import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDashBoard } from './stocks-dashboard';

describe('StocksDashBoard', () => {
  let component: StocksDashBoard;
  let fixture: ComponentFixture<StocksDashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksDashBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksDashBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
