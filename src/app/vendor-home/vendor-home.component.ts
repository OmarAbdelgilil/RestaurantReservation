import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { ApiRequestsService } from '../api-requests.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit{
  restaurants:any[]=[];
  reservations : any[]=[];
  restaurantNames :any[]=[];
  noReservations = 0;
  noRestaurants = 0;
  constructor (private restaurant:RestaurantsService,private router:Router,private req:ApiRequestsService, private auth : AuthService){
    
  }
  ngOnInit()
  {
    setInterval(()=>{
      this.restaurants=[];
      
      this.restaurant.restaurants.forEach(element => {
        if(element.vendorId == this.auth.id)
        {
          this.restaurants.push(element);
        }
      });
      this.noRestaurants = this.restaurants.length;
      this.req.getVendorReservations({vendorId : this.auth.id}).subscribe(async data=>{
        await data
        this.reservations = data.allReservations;
        this.noReservations = data.allReservations.length;
        this.restaurantNames=[];
        this.reservations.forEach(res => {
          this.restaurants.forEach(rest => {
            if(res.restaurantId == rest._id)
            {
              this.restaurantNames.push(rest.name);
              return;
            }
          });
        });
        console.log(data);
      });
    },1000); 
  }
  cancelReservation(i:number)
  {
    this.req.deleteReservation({reservationId :this.reservations[i]._id}).subscribe();
  }


}
