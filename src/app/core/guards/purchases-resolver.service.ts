import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipesDatabaseService } from '../services/recipes-database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchasesResolverService implements Resolve<object> {

  constructor(private recipesDatabaseService: RecipesDatabaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Array<string>> | Observable<object> | Promise<Array<string>> | Array<string> {
    return this.recipesDatabaseService.getPurchases();
  }
}
