import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../shared/interfaces/recipe.interface';
import { RecipesDatabaseService } from '../../core/services/recipes-database.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-editor-form',
  templateUrl: './recipe-editor-form.component.html',
  styleUrls: ['./recipe-editor-form.component.scss']
})
export class RecipeEditorFormComponent implements OnInit, OnDestroy {

  editForm: Recipe = {
    title: '',
    description: '',
    photoUrl: '',
    instructions: '',
    categoryId: '',
    ingredients: []
  };
  mode: string;
  categories = [];
  photoRegExpVerification = /\.(jpe?g|png|gif|svg)$/i;
  recipeEditor: FormGroup;

  private alive = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipesDatabaseService: RecipesDatabaseService
  ) { }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.params.mode;
    if (this.activatedRoute.snapshot.data.editForm) {
      this.editForm = this.activatedRoute.snapshot.data.editForm;
    }
    this.recipeEditor = new FormGroup({
      title: new FormControl(this.editForm.title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl(this.editForm.description, [
        Validators.required
      ]),
      photoUrl: new FormControl(this.editForm.photoUrl, [
        Validators.required,
        Validators.pattern(this.photoRegExpVerification)
      ]),
      ingredients: new FormArray(this.editForm.ingredients.map(
        (ingredient: string | FormControl) => ingredient = new FormControl(ingredient)
      )),
      instructions: new FormControl(this.editForm.instructions, [
        Validators.required
      ]),
      categoryId: new FormControl(this.editForm.categoryId, [
        Validators.required
      ]),
    });
    this.recipesDatabaseService.getCategories()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => this.categories = data);
  }

  addNewRecipe(): void {
    this.recipesDatabaseService.postRecipe({
      title: this.recipeEditor.controls.title.value,
      description: this.recipeEditor.controls.description.value,
      photoUrl: this.recipeEditor.controls.photoUrl.value,
      ingredients: this.recipeEditor.controls.ingredients.value,
      instructions: this.recipeEditor.controls.instructions.value,
      categoryId: this.recipeEditor.controls.categoryId.value
    })
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  editRecipe(): void {
    this.recipesDatabaseService.putRecipe({
      title: this.recipeEditor.controls.title.value,
      description: this.recipeEditor.controls.description.value,
      photoUrl: this.recipeEditor.controls.photoUrl.value,
      ingredients: this.recipeEditor.controls.ingredients.value,
      instructions: this.recipeEditor.controls.instructions.value,
      categoryId: this.recipeEditor.controls.categoryId.value,
      id: this.editForm.id
    })
    .pipe(takeWhile(() => this.alive))
    .subscribe();
  }

  addIngredient(): void {
    this.ingredients.push(new FormControl());
  }

  delIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  submitEditor(): void {
    switch (this.mode) {
      case 'create':
        this.addNewRecipe();
        break;
      case 'edit':
        this.editRecipe();
        break;
    }
    this.router.navigate(['/recipes']);
  }

  get title(): FormControl {
    return this.recipeEditor.controls.title as FormControl;
  }

  get description(): FormControl {
    return this.recipeEditor.controls.description as FormControl;
  }

  get photoUrl(): FormControl {
    return this.recipeEditor.controls.photoUrl as FormControl;
  }

  get ingredients(): FormArray {
    return this.recipeEditor.controls.ingredients as FormArray;
  }

  get instructions(): FormControl {
    return this.recipeEditor.controls.instructions as FormControl;
  }

  get categoryId(): FormControl {
    return this.recipeEditor.controls.categoryId as FormControl;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
