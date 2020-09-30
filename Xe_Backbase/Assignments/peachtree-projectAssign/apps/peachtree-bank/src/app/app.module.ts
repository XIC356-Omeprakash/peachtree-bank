import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { ProductSummaryListWidgetModule, ProductSummaryWidgetAccountSelectorModule } from '@backbase/retail-ang/product-summary';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { NavigationSpaWidgetModule } from '@backbase/universal-ang/navigation';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BackbaseCoreModule,
    ProductSummaryListWidgetModule,
    ContainersModule,
    NavigationSpaWidgetModule,
    LayoutContainerModule,
    ProductSummaryWidgetAccountSelectorModule,
    TransactionsListWidgetModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true })
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
