import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmpHeader } from './ccmp-header';

describe('CcmpHeader', () => {
  let component: CcmpHeader;
  let fixture: ComponentFixture<CcmpHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmpHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmpHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
