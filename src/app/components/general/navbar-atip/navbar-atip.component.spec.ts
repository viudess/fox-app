import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAtipComponent } from './navbar-atip.component';

describe('NavbarAtipComponent', () => {
  let component: NavbarAtipComponent;
  let fixture: ComponentFixture<NavbarAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
