import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodcardComponent } from './moodcard.component';

describe('MoodcardComponent', () => {
  let component: MoodcardComponent;
  let fixture: ComponentFixture<MoodcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
