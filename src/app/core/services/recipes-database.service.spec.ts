import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../shared/interfaces/recipe.interface';

import { RecipesDatabaseService } from './recipes-database.service';

fdescribe('RecipesDatabaseService', () => {
  const recipes: Recipe[] = [];
  const recipe: Recipe = {
    title: '',
    description: '',
    photoUrl: '',
    ingredients: [],
    instructions: '',
    categoryId: '',
    id: ''
  };
  let service: RecipesDatabaseService;
  const purchases = [];
  const http: any = {
    get: (): Observable<{}> => of({}),
    put: (): Observable<null> => of(null),
    delete: (): Observable<null> => of(null),
  };

  beforeEach(() => {
    service = new RecipesDatabaseService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('purchases', () => {
    it('should call http get method', () => {
      spyOn(http, 'get');
      service.getPurchases();
      expect(http.get).toHaveBeenCalled();
    });

    it('should call get purchases array', () => {
      spyOn(http, 'get').and.returnValue(of(purchases));

      service.getPurchases().subscribe((data) => {
        expect(data).toEqual(purchases);
      });
    });
  });

  describe('purchases', () => {
    it('should call http get method', () => {
      spyOn(http, 'get');
      service.getRecipes();
      expect(http.get).toHaveBeenCalled();
    });

    it('should call get recipes array', () => {
      spyOn(http, 'get').and.returnValue(of(recipes));

      service.getRecipes().subscribe((data) => {
        expect(data).toEqual(recipes);
      });
    });

    it('should call http put method', () => {
      spyOn(http, 'put');
      service.putRecipe(recipe);
      expect(http.put).toHaveBeenCalled();
    });

    it('should return null', () => {
      spyOn(http, 'put').and.returnValue(of(null));

      service.putRecipe(recipe).subscribe((data) => {
        expect(data).toEqual(null);
      });
    });

    it('should call http delete method', () => {
      spyOn(http, 'delete');
      service.delRecipe(recipe.id);
      expect(http.delete).toHaveBeenCalled();
    });

    it('should return null', () => {
      spyOn(http, 'delete').and.returnValue(of(null));

      service.delRecipe(recipe.id).subscribe((data) => {
        expect(data).toEqual(null);
      });
    });
  });
});
