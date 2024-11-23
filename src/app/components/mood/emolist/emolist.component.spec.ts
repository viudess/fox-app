import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmolistComponent } from './emolist.component';

describe('EmolistComponent', () => {
  let component: EmolistComponent;
  let fixture: ComponentFixture<EmolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
