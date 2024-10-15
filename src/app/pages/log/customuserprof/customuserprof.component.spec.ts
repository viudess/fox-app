import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomuserprofComponent } from './customuserprof.component';

describe('CustomuserprofComponent', () => {
  let component: CustomuserprofComponent;
  let fixture: ComponentFixture<CustomuserprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomuserprofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomuserprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
