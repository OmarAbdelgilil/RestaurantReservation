import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarCComponent } from './navbar-c/navbar-c.component';
import { RestaurantCComponent } from './restaurant-c/restaurant-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupLoginComponent,
    SignupComponent,
    CustomerHomeComponent,
    VendorHomeComponent,
    NavbarCComponent,
    RestaurantCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
