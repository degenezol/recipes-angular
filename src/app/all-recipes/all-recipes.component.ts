import { Component, OnInit } from '@angular/core';

import { Recipe } from '../shared/interfaces/recipe.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  allRecipes: Array<Recipe>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.allRecipes = this.route.snapshot.data.recipesList;
  }
}
