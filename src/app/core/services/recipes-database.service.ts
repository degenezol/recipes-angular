import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../shared/interfaces/recipe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesDatabaseService {
  url = {
    recipes: 'recipes',
    categories: 'categories',
    favorites: 'favorites',
    purchases: 'purchases'
  };

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.url.recipes);
  }

  getRecipeById(id: string): any {
    return this.http.get(`${this.url.recipes}/${id}`);
  }

  postRecipe(recipe: Recipe) {
    return this.http.post(this.url.recipes, recipe);
  }

  putRecipe(recipe: Recipe) {
    return this.http.put(this.url.recipes, recipe);
  }

  delRecipe(id: string) {
    return this.http.delete(`${this.url.recipes}/${id}`);
  }

  addLike(recipeId: string) {
    return this.http.post(`${this.url.recipes}/likes`, { id: recipeId });
  }

  addDislike(recipeId: string) {
    return this.http.post(`${this.url.recipes}/dislikes`, { id: recipeId });
  }

  getFavorites() {
    return this.http.get(this.url.favorites);
  }

  addToFavorites(recipeId: string) {
    return this.http.post(this.url.favorites, { id: recipeId });
  }

  delFromFavorites(recipeId: string) {
    return this.http.delete(`${this.url.favorites}/${recipeId}`);
  }

  getCategories() {
    return this.http.get(this.url.categories);
  }

  getCategoryById(id: string) {
    return this.http.get(this.url.categories).pipe(
      map((categories: any) => {
        return categories.find(category => category.id === id).name;
      })
    );
  }

  getPurchases() {
    return this.http.get(this.url.purchases);
  }

  addPurchases(purchase: object) {
    return this.http.post(this.url.purchases, purchase);
  }

  delPurchases(purchaseId: string) {
    return this.http.delete(`${this.url.purchases}/${purchaseId}`);
  }
}
