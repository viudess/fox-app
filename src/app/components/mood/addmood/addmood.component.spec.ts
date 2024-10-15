import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoodComponent } from './addmood.component';

describe('AddmoodComponent', () => {
  let component: AddmoodComponent;
  let fixture: ComponentFixture<AddmoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
