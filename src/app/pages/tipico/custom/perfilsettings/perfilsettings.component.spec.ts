import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilsettingsComponent } from './perfilsettings.component';

describe('PerfilsettingsComponent', () => {
  let component: PerfilsettingsComponent;
  let fixture: ComponentFixture<PerfilsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilsettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
