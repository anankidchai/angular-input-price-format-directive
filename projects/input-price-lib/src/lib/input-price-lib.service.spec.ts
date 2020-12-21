import { TestBed } from '@angular/core/testing';

import { InputPriceLibService } from './input-price-lib.service';

describe('InputPriceLibService', () => {
  let service: InputPriceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputPriceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
