import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PurchasesComponent } from './purchases.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchasesRoutingModule } from './purchases-routing.module';

@NgModule({
  declarations: [
    PurchasesComponent,
    AddPurchaseComponent,
    PurchasesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PurchasesRoutingModule
  ],
  exports: [PurchasesComponent],
  providers: []
})
export class PurchasesModule { }
