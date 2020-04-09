import { TestBed } from '@angular/core/testing';

import { PurchasesResolverService } from './purchases-resolver.service';

describe('PurchasesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchasesResolverService = TestBed.get(PurchasesResolverService);
    expect(service).toBeTruthy();
  });
});
