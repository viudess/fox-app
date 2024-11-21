import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremedyComponent } from './addremedy.component';

describe('AddremedyComponent', () => {
  let component: AddremedyComponent;
  let fixture: ComponentFixture<AddremedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddremedyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddremedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
