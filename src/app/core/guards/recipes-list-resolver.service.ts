import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../../shared/interfaces/recipe.interface';
import { RecipesDatabaseService } from '../services/recipes-database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesListResolverService implements Resolve<Array<Recipe>> {

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<any> | Promise<Array<Recipe>> | Array<Recipe> {
    return this.recipesDatabaseService.getRecipes();
  }
}
