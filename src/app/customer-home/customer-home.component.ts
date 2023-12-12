import { Component } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {
  constructor(private restaurant:RestaurantsService,private router:Router){}
  restaurants?:any[]=this.restaurant.restaurants;
  gotores(id:number){
    console.log("clicked");
    this.restaurant.resid = id;
    this.router.navigate(['/rest']);
  }
}
