import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLandingPageComponent } from './sales-landing-page.component';

describe('SalesLandingPageComponent', () => {
  let component: SalesLandingPageComponent;
  let fixture: ComponentFixture<SalesLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
