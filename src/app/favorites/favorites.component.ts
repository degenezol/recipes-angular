import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipesDatabaseService } from '../core/services/recipes-database.service';
import { Recipe } from '../shared/interfaces/recipe.interface';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  favoriteRecipes: Array<Recipe> | object;

  private alive = true;

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  ngOnInit() {
    this.recipesDatabaseService.getFavorites()
    .pipe(takeWhile(() => this.alive))
    .subscribe(data => this.favoriteRecipes = data);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
