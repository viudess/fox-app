import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodquestionAtipComponent } from './moodquestion-atip.component';

describe('MoodquestionAtipComponent', () => {
  let component: MoodquestionAtipComponent;
  let fixture: ComponentFixture<MoodquestionAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodquestionAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodquestionAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
