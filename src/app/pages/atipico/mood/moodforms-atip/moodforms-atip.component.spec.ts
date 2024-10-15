import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodformsAtipComponent } from './moodforms-atip.component';

describe('MoodformsAtipComponent', () => {
  let component: MoodformsAtipComponent;
  let fixture: ComponentFixture<MoodformsAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodformsAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodformsAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
