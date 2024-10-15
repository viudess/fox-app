import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAtipComponent } from './perfil-atip.component';

describe('PerfilAtipComponent', () => {
  let component: PerfilAtipComponent;
  let fixture: ComponentFixture<PerfilAtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilAtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
