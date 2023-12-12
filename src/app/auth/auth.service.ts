import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  username?:string;
  role?:string;
  constructor(private router:Router){


    if(this.isLoggedIn = !!localStorage.getItem('token')){
      let t = JSON.parse(localStorage.getItem('token')!);
      this.username=t.username;
      this.role=t.role;
    }

}
  users = [{username:'omar',email:"omar@gmail.com",role:"vendor",pass:"123"},
  {username:'heba',email:"heba@gmail.com",role:"vendor",pass:"123"},
  {username:'mohamed',email:"mohamed@gmail.com",role:"customer",pass:"123"},
  {username:'yassmin',email:"yassmin@gmail.com",role:"customer",pass:"123"},
];

  islogedin(): boolean{
    return this.isLoggedIn;
  }



  login(email:string , pass:string):boolean{
    let u = this.users.find((user)=>{
      if(user.email==email && user.pass ==pass)
      {
        return user;
      }
      return null;
    })
    if(u == null)return false;
    this.username = u.username;
    this.role = u.role;
    this.isLoggedIn = true;
    localStorage.setItem('token',JSON.stringify({username:this.username,role:this.role}));
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = undefined;
    this.role = undefined;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
}
