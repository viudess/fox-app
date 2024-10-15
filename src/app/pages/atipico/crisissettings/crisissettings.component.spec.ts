import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisissettingsComponent } from './crisissettings.component';

describe('CrisissettingsComponent', () => {
  let component: CrisissettingsComponent;
  let fixture: ComponentFixture<CrisissettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrisissettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisissettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
