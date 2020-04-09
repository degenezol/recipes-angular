import { TestBed } from '@angular/core/testing';

import { RecipesListResolverService } from './recipes-list-resolver.service';

describe('RecipesListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesListResolverService = TestBed.get(RecipesListResolverService);
    expect(service).toBeTruthy();
  });
});
