import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialstoriesComponent } from './socialstories.component';

describe('SocialstoriesComponent', () => {
  let component: SocialstoriesComponent;
  let fixture: ComponentFixture<SocialstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialstoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
