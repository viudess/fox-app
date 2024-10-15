import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilsettingsAtipComponent } from './perfilsettings-atip.component';

describe('PerfilsettingsAtipComponent', () => {
  let component: PerfilsettingsAtipComponent;
  let fixture: ComponentFixture<PerfilsettingsAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilsettingsAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilsettingsAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
