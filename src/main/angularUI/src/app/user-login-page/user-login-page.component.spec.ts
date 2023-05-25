import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginPageComponent } from './user-login-page.component';

describe('UserLoginPageComponent', () => {
  let component: UserLoginPageComponent;
  let fixture: ComponentFixture<UserLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
