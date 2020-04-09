import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../interfaces/recipe.interface';

import { RecipesDatabaseService } from '../../../core/services/recipes-database.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  isFavorite = false;
  recipe: Recipe = {
    title: '',
    description: '',
    photoUrl: '',
    instructions: '',
    categoryId: '',
    ingredients: []
  };
  category: string;

  private id: string;
  private alive = true;

  constructor(
    private activateRoute: ActivatedRoute,
    private recipesDatabaseService: RecipesDatabaseService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => this.id = params.id);
    this.recipesDatabaseService.getRecipeById(this.id)
      .pipe(takeWhile(() => this.alive))
      .subscribe((recipe: Recipe) => {
        this.recipe = recipe;
        this.recipesDatabaseService.getCategoryById(this.recipe.categoryId)
          .subscribe((category: string) => this.category = category);
      });

  }

  addRecipeToFavorites(id: string): void {
    this.recipesDatabaseService.addToFavorites(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
    this.isFavorite = true;
  }

  delRecipeFromFavorites(id: string): void {
    this.recipesDatabaseService.delFromFavorites(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
    this.isFavorite = false;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
