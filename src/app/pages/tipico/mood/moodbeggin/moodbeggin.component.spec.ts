import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodbegginComponent } from './moodbeggin.component';

describe('MoodbegginComponent', () => {
  let component: MoodbegginComponent;
  let fixture: ComponentFixture<MoodbegginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodbegginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodbegginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
