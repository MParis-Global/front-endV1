import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePricesComponent } from './service-prices.component';

describe('ServicePricesComponent', () => {
  let component: ServicePricesComponent;
  let fixture: ComponentFixture<ServicePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
