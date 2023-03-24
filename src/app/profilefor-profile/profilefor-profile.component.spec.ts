import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileforProfileComponent } from './profilefor-profile.component';

describe('ProfileforProfileComponent', () => {
  let component: ProfileforProfileComponent;
  let fixture: ComponentFixture<ProfileforProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileforProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileforProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
