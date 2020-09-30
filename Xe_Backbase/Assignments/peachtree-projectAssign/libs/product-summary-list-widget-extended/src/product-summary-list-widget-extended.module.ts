import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ProductSummaryListWidgetExtendedComponent } from './product-summary-list-widget-extended.component';

@NgModule({
  declarations: [ProductSummaryListWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { ProductSummaryListWidgetExtendedComponent }
    })
  ]
})
export class ProductSummaryListWidgetExtendedModule { }