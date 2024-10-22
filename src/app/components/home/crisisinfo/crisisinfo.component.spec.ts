import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisinfoComponent } from './crisisinfo.component';

describe('CrisisinfoComponent', () => {
  let component: CrisisinfoComponent;
  let fixture: ComponentFixture<CrisisinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrisisinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
