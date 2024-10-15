import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaybuttomComponent } from './daybuttom.component';

describe('DaybuttomComponent', () => {
  let component: DaybuttomComponent;
  let fixture: ComponentFixture<DaybuttomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaybuttomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaybuttomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
