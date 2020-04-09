import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipesDatabaseService } from '../../core/services/recipes-database.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit, OnDestroy {

  items = [];

  private alive = false;

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  ngOnInit() {
    this.recipesDatabaseService.getPurchases()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data: any) => this.items = data);
  }

  delPurchase(id: string) {
    this.recipesDatabaseService.delPurchases(id)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
