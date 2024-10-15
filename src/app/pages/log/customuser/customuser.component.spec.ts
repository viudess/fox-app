import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomuserComponent } from './customuser.component';

describe('CustomuserComponent', () => {
  let component: CustomuserComponent;
  let fixture: ComponentFixture<CustomuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
