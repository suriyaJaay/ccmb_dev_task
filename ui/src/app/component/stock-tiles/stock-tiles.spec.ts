import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTiles } from './stock-tiles';

describe('StockTiles', () => {
  let component: StockTiles;
  let fixture: ComponentFixture<StockTiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
