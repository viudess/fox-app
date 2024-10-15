import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwishAtipComponent } from './addwish-atip.component';

describe('AddwishAtipComponent', () => {
  let component: AddwishAtipComponent;
  let fixture: ComponentFixture<AddwishAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddwishAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddwishAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
