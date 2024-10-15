import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodbegginAtipComponent } from './moodbeggin-atip.component';

describe('MoodbegginAtipComponent', () => {
  let component: MoodbegginAtipComponent;
  let fixture: ComponentFixture<MoodbegginAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodbegginAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodbegginAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
