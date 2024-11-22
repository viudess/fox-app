import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishformComponent } from './wishform.component';

describe('WishformComponent', () => {
  let component: WishformComponent;
  let fixture: ComponentFixture<WishformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
