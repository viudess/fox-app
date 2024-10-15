import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtasksAtipComponent } from './addtasks-atip.component';

describe('AddtasksAtipComponent', () => {
  let component: AddtasksAtipComponent;
  let fixture: ComponentFixture<AddtasksAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtasksAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtasksAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
