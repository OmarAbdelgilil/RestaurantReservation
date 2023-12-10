import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { uauthGuard } from './auth/uguard.guard';
import { vauthGuard } from './auth/vguard.guard';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:SignupLoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customer_h',component:CustomerHomeComponent,canActivate:[uauthGuard]},
  {path:'vendor_h',component:VendorHomeComponent,canActivate:[vauthGuard]},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
