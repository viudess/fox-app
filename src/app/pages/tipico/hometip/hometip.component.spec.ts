import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometipComponent } from './hometip.component';

describe('HometipComponent', () => {
  let component: HometipComponent;
  let fixture: ComponentFixture<HometipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HometipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
