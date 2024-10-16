import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoodAtipComponent } from './addmood-atip.component';

describe('AddmoodAtipComponent', () => {
  let component: AddmoodAtipComponent;
  let fixture: ComponentFixture<AddmoodAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmoodAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmoodAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
