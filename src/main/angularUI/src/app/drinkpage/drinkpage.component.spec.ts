import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkpageComponent } from './drinkpage.component';

describe('DrinkpageComponent', () => {
  let component: DrinkpageComponent;
  let fixture: ComponentFixture<DrinkpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
