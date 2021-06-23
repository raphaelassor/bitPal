import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDashboardComponent } from './market-dashboard.component';

describe('MarketDashboardComponent', () => {
  let component: MarketDashboardComponent;
  let fixture: ComponentFixture<MarketDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
