import { TestBed } from '@angular/core/testing';

import { AdminOrderItemService } from './admin-order-item.service';

describe('AdminOrderItemService', () => {
  let service: AdminOrderItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrderItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
