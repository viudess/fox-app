import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodregisterComponent } from './moodregister.component';

describe('MoodregisterComponent', () => {
  let component: MoodregisterComponent;
  let fixture: ComponentFixture<MoodregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
