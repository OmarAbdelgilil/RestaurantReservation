import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router:Router, private auth:AuthService, private snackbar:MatSnackBar){}
  userName!:string;
  email!:string;
  pass!:string;
  passConf!:string;
  role:string = 'role';

  chooseRole(role:string):void
  {
    this.role = role;
  }
  submit():void
  {
    if(this.email&&this.pass&&this.passConf&&this.userName&&this.role!='role')
    {
      if(this.pass === this.passConf)
      {
        const obj = {email:this.email,pass:this.pass,username:this.userName,role:this.role};
        this.auth.users.push(obj);
        let snackBarRef = this.snackbar.open('Signed up successfully','login!',{duration: 3000});
        snackBarRef.onAction().subscribe(()=>{
          this.router.navigate(['/login']);
        })
      }
      else this.snackbar.open("Password doesn't match ",'ok',{duration: 3000});
    }
    else this.snackbar.open("Please fill all fields",'ok',{duration: 3000}) ;
  }
}
