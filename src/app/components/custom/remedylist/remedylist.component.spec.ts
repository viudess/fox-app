import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemedylistComponent } from './remedylist.component';

describe('RemedylistComponent', () => {
  let component: RemedylistComponent;
  let fixture: ComponentFixture<RemedylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemedylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemedylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
