import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicationComponent } from './addmedication.component';

describe('AddmedicationComponent', () => {
  let component: AddmedicationComponent;
  let fixture: ComponentFixture<AddmedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
