import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderParentComponent } from './order-parent.component';

describe('OrderParentComponent', () => {
  let component: OrderParentComponent;
  let fixture: ComponentFixture<OrderParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
