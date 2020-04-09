import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Array<Recipe>;

  constructor() { }

  ngOnInit() {
  }
}
