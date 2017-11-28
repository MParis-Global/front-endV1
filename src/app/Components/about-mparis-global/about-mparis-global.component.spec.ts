import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMparisGlobalComponent } from './about-mparis-global.component';

describe('AboutMparisGlobalComponent', () => {
  let component: AboutMparisGlobalComponent;
  let fixture: ComponentFixture<AboutMparisGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMparisGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMparisGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
