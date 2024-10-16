import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtasksComponent } from './addtasks.component';

describe('AddtasksComponent', () => {
  let component: AddtasksComponent;
  let fixture: ComponentFixture<AddtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
