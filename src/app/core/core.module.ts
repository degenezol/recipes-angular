import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeResolverService } from './guards/recipe-resolver.service';
import { RecipesListResolverService } from './guards/recipes-list-resolver.service';
import { AppRoutingModule } from '../app-routing.module';
import { RecipesDatabaseService } from './services/recipes-database.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    RecipesDatabaseService,
    RecipeResolverService,
    RecipesListResolverService
  ]
})
export class CoreModule { }
