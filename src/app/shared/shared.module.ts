import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { BoxShadowEffectDirective } from './directives/box-shadow-effect.directive';
import { ShortTitlePipe } from './pipes/short-title.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    BoxShadowEffectDirective,
    ShortTitlePipe

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    BoxShadowEffectDirective,
    ShortTitlePipe
  ],
  providers: []
})
export class SharedModule { }
