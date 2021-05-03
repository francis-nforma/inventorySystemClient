import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import {from} from "rxjs";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InventoryDataService } from './service/inventory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginDataService } from "./service/login-data.service";
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InventoryDataService,
    LoginDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
