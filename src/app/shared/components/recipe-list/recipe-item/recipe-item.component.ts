import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Recipe } from '../../../interfaces/recipe.interface';
import { RecipesDatabaseService } from '../../../../core/services/recipes-database.service';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit, OnDestroy {

  @Input() recipe: Recipe;

  private alive = true;

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  ngOnInit() {
  }

  addLike(id: string): void {
    this.recipesDatabaseService.addLike(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => this.recipe.likes = data.likes);
  }

  addDislike(id: string): void {
    this.recipesDatabaseService.addDislike(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => this.recipe.likes = data.likes);
  }

  deleteRecipe(id: string): void {
    this.recipesDatabaseService.delRecipe(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
