import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class SignupLoginComponent {
  constructor(private authService:AuthService,private router:Router){}
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
      }
      console.log("wrong credentials");
    }

}
