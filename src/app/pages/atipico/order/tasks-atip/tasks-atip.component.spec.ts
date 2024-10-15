import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAtipComponent } from './tasks-atip.component';

describe('TasksAtipComponent', () => {
  let component: TasksAtipComponent;
  let fixture: ComponentFixture<TasksAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
