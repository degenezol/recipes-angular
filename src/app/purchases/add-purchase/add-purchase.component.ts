import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipesDatabaseService } from '../../core/services/recipes-database.service';
import { FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit, OnDestroy {

  private alive = true;

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  ngOnInit() {
  }

  addItem(form: FormGroup) {
    this.recipesDatabaseService.addPurchases({purchases: form.value.title})
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
