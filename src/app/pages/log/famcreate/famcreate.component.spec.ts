import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamcreateComponent } from './famcreate.component';

describe('FamcreateComponent', () => {
  let component: FamcreateComponent;
  let fixture: ComponentFixture<FamcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
