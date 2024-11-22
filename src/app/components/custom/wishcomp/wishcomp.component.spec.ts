import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishcompComponent } from './wishcomp.component';

describe('WishcompComponent', () => {
  let component: WishcompComponent;
  let fixture: ComponentFixture<WishcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
