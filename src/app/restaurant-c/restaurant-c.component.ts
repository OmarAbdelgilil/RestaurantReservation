import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { ApiRequestsService } from '../api-requests.service';

@Component({
  selector: 'app-restaurant-c',
  templateUrl: './restaurant-c.component.html',
  styleUrls: ['./restaurant-c.component.css']
})
export class RestaurantCComponent implements OnInit{
  constructor(private r:RestaurantsService,private api:ApiRequestsService){}
  rest:any;
  phone!:string;
  req!:string;
  noc:string="1";
  time:string="Time Slots";
  times!:any;
  ngOnInit(): void {
    setInterval(()=>{
      this.rest=this.r.restaurants.find((data)=>{
        return data._id==this.r.resid;
      });
      this.times = this.rest.timeSlots;
    },1000);
    
    console.log(this.times);
  }


  scrollToDiv() {
    document.getElementById("resForm")!.scrollIntoView();
  }
  maxtable() {
    if(parseInt(this.noc)>this.rest.notable%6){
      this.noc =(this.rest.numTables/6).toString()
    }

  }
  choose(time:string) {
    this.time=time;
  }
  submit() {
    console.log(this.phone);
    console.log(this.req);
    console.log(this.noc);
    console.log(this.time);
    let data = {phoneNo:this.phone,numberOfSeats:this.noc,reservationTime:this.time,restaurantId:this.r.resid,customerId:"6579c1feaaa4e17f5d874523"};
    console.log(this.api.createReservation(data).subscribe(data=>{
      console.log(data);
    }));
  }
}
