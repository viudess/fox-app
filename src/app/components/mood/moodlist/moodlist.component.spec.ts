import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodlistComponent } from './moodlist.component';

describe('MoodlistComponent', () => {
  let component: MoodlistComponent;
  let fixture: ComponentFixture<MoodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
