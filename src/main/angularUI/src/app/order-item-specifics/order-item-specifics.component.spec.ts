import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemSpecificsComponent } from './order-item-specifics.component';

describe('OrderItemSpecificsComponent', () => {
  let component: OrderItemSpecificsComponent;
  let fixture: ComponentFixture<OrderItemSpecificsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemSpecificsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
