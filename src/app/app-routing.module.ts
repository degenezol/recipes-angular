import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './shared/components/recipe-details/recipe-details.component';
import { RecipesListResolverService } from './core/guards/recipes-list-resolver.service';
import { RecipeResolverService } from './core/guards/recipe-resolver.service';
import { RecipeEditorFormComponent } from './all-recipes/recipe-editor-form/recipe-editor-form.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: AllRecipesComponent,
    resolve: {
      recipesList: RecipesListResolverService
    }
  },
  {
    path: 'favorites',
    loadChildren: './favorites/favorites.module#FavoritesModule'
  },
  {
    path: 'purchases',
    loadChildren: './purchases/purchases.module#PurchasesModule'
  },
  {
    path: 'details/:id',
    component: RecipeDetailsComponent
  },
  {
    path: ':mode',
    component: RecipeEditorFormComponent
  },
  {
    path: ':mode/:id',
    component: RecipeEditorFormComponent,
    resolve: {
      editForm: RecipeResolverService
    }
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
