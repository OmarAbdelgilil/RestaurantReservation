import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { ApiRequestsService } from '../api-requests.service';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-c',
  templateUrl: './restaurant-c.component.html',
  styleUrls: ['./restaurant-c.component.css']
})
export class RestaurantCComponent implements OnInit{
  constructor(private r:RestaurantsService,private api:ApiRequestsService,private auth:AuthService,private router:Router, private snackbar:MatSnackBar){}
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
    if(this.time!="Time Slots"&&this.noc){
      let data = {sepcialReq:this.req,numberOfSeats:this.noc,reservationTime:this.time,restaurantId:this.r.resid,customerId:this.auth.id,reservationName:this.auth.username};
      console.log(this.api.createReservation(data).subscribe(async data=>{
        await data;
        console.log(data);
        let snackBarRef = this.snackbar.open('Reservation Completed','My Reservations',{duration: 3000});
        snackBarRef.onAction().subscribe(()=>{
          this.router.navigate(['/myReservations']);
        })
        this.req="";
        this.noc="1";
        this.time="Time Slots";
      }));

    }
    else
    {
      this.snackbar.open('Choose Time For Reservation','OK',{duration: 3000});
    }
  }
}
