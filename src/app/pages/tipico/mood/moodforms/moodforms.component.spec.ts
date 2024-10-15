import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodformsComponent } from './moodforms.component';

describe('MoodformsComponent', () => {
  let component: MoodformsComponent;
  let fixture: ComponentFixture<MoodformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
