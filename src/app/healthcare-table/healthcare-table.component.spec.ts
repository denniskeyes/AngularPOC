import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareTableComponent } from './healthcare-table.component';

describe('HealthcareTableComponent', () => {
  let component: HealthcareTableComponent;
  let fixture: ComponentFixture<HealthcareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthcareTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
