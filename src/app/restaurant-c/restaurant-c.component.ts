import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurant-c',
  templateUrl: './restaurant-c.component.html',
  styleUrls: ['./restaurant-c.component.css']
})
export class RestaurantCComponent implements OnInit{
  constructor(private r:RestaurantsService){}
  rest:any;
  phone!:string;
  req!:string;
  noc!:string;
  time:string="Time Slots";
  ngOnInit(): void {
    this.rest=this.r.restaurants.find((data)=>{
      return data.id==this.r.resid;
    })
  }


  scrollToDiv() {
    document.getElementById("resForm")!.scrollIntoView();
  }
  maxtable() {
    if(parseInt(this.noc)>this.rest.notable%6){
      this.noc =(this.rest.notable/6).toString()
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

  }
}
