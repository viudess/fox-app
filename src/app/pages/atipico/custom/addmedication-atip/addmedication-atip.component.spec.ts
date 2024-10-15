import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicationAtipComponent } from './addmedication-atip.component';

describe('AddmedicationAtipComponent', () => {
  let component: AddmedicationAtipComponent;
  let fixture: ComponentFixture<AddmedicationAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmedicationAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmedicationAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
