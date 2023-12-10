import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  users = [{username:'omar',email:"omar@gmail.com",role:"vendor",pass:"123"},
  {username:'heba',email:"heba@gmail.com",role:"vendor",pass:"123"},
  {username:'mohamed',email:"mohamed@gmail.com",role:"customer",pass:"123"},
  {username:'yassmin',email:"yassmin@gmail.com",role:"customer",pass:"123"},
];
  username?:string;
  role?:string;

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
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = undefined;
    this.role = undefined;
  }
}