import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLandingPageComponent } from './hr-landing-page.component';

describe('HrLandingPageComponent', () => {
  let component: HrLandingPageComponent;
  let fixture: ComponentFixture<HrLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
