import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DemoComponent } from './demo/demo.component';
import { FirstComponent } from './first/first.component';
import { AllProductComponent } from './all-product/all-product.component';

import { routing } from './app.routing';
import { DoublePipe } from './double.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FirstComponent,
    AllProductComponent,
    DoublePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
