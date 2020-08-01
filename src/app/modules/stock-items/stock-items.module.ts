import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockItemsRoutingModule } from './stock-items-routing.module';
import { CreateStockItemComponent } from './components/create-stock-item/create-stock-item.component';
import { ListStockItemsComponent } from './components/list-stock-items/list-stock-items.component';


@NgModule({
  declarations: [CreateStockItemComponent, ListStockItemsComponent],
  imports: [
    CommonModule,
    StockItemsRoutingModule
  ]
})
export class StockItemsModule { }
