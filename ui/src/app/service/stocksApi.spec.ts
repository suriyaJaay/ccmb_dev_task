import { TestBed } from '@angular/core/testing';
import { StocksApi } from './stocksApi';

describe('Stocks', () => {
  let service: StocksApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
