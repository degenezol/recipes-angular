import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppInterceptor } from './app-interceptor';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SharedModule } from './shared/shared.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PurchasesModule } from './purchases/purchases.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { RecipeEditorFormComponent } from './all-recipes/recipe-editor-form/recipe-editor-form.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    ErrorComponent,
    RecipeEditorFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    FavoritesModule,
    PurchasesModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
