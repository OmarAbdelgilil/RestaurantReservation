import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class SignupLoginComponent {
  constructor(private authService:AuthService,private router:Router,private snackbar:MatSnackBar){}
    email!:string;
    pass!:string;
    onSubmit():void{
      if(this.email && this.pass)
      {
        if(this.authService.login(this.email,this.pass))
        {
          if(this.authService.role == 'customer')
          this.router.navigate(['/customer_h']);
          if(this.authService.role == 'vendor')
          this.router.navigate(['/vendor_h']);
          return;
        }
        this.snackbar.open("Email or Password is not valid",'ok',{duration: 3000});
      }
      else this.snackbar.open("Please fill all fields",'ok',{duration: 3000}) ;
    }

}
