import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeatipComponent } from './homeatip.component';

describe('HomeatipComponent', () => {
  let component: HomeatipComponent;
  let fixture: ComponentFixture<HomeatipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeatipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeatipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
