import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamenterComponent } from './famenter.component';

describe('FamenterComponent', () => {
  let component: FamenterComponent;
  let fixture: ComponentFixture<FamenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
