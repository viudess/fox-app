import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaComponent } from './caa.component';

describe('CaaComponent', () => {
  let component: CaaComponent;
  let fixture: ComponentFixture<CaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
