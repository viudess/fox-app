import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwishComponent } from './addwish.component';

describe('AddwishComponent', () => {
  let component: AddwishComponent;
  let fixture: ComponentFixture<AddwishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddwishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
