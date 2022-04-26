import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerStepComponent } from './career-step.component';

describe('CareerStepComponent', () => {
  let component: CareerStepComponent;
  let fixture: ComponentFixture<CareerStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
