import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisbuttomComponent } from './crisisbuttom.component';

describe('CrisisbuttomComponent', () => {
  let component: CrisisbuttomComponent;
  let fixture: ComponentFixture<CrisisbuttomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrisisbuttomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrisisbuttomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
