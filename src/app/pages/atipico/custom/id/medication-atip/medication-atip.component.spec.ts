import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationAtipComponent } from './medication-atip.component';

describe('MedicationAtipComponent', () => {
  let component: MedicationAtipComponent;
  let fixture: ComponentFixture<MedicationAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
