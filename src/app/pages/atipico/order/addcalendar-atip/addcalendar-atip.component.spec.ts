import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcalendarAtipComponent } from './addcalendar-atip.component';

describe('AddcalendarAtipComponent', () => {
  let component: AddcalendarAtipComponent;
  let fixture: ComponentFixture<AddcalendarAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcalendarAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcalendarAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
