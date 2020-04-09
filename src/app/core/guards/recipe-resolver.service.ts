import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../../shared/interfaces/recipe.interface';
import { RecipesDatabaseService } from '../services/recipes-database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe> {

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipesDatabaseService.getRecipeById(route.params.id) as Recipe;
  }
}
