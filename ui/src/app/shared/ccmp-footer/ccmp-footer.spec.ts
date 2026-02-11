import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmpFooter } from './ccmp-footer';

describe('CcmpFooter', () => {
  let component: CcmpFooter;
  let fixture: ComponentFixture<CcmpFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmpFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmpFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
