import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomuseratipComponent } from './customuseratip.component';

describe('CustomuseratipComponent', () => {
  let component: CustomuseratipComponent;
  let fixture: ComponentFixture<CustomuseratipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomuseratipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomuseratipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
