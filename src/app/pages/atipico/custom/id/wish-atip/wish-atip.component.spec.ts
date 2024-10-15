import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishAtipComponent } from './wish-atip.component';

describe('WishAtipComponent', () => {
  let component: WishAtipComponent;
  let fixture: ComponentFixture<WishAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
