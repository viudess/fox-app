import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodquestionComponent } from './moodquestion.component';

describe('MoodquestionComponent', () => {
  let component: MoodquestionComponent;
  let fixture: ComponentFixture<MoodquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodquestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
