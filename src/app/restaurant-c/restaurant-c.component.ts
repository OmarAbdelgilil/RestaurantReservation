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
  req:string="N/A";
  noc:number=1;
  time:string="Time Slots";
  times!:any;
  update:boolean = false;
  reservationId!:string;
  title:string = "Create Reservation";
  buttonText:string = "RESERVE"; 
  ngOnInit(): void {
    if(this.r.update)
    {
      this.update = this.r.update;
      this.noc = this.r.reservationToUP.numberOfSeats;
      this.reservationId = this.r.reservationToUP._id;
      this.time = this.r.reservationToUP.reservationTime;
      this.req = this.r.reservationToUP.sepcialReq;
      this.r.update = false;
      this.title = "Update Reservation";
      this.buttonText = "Update";
      this.scrollToDiv();
    }
    setInterval(()=>{
      this.rest=this.r.restaurants.find((data)=>{
        if(!this.update)return data._id==this.r.resid;
        return data._id = this.r.reservationToUP.restaurantId;
      });
      this.times = this.rest.timeSlots;
    },1000);
    console.log(this.times);
  }


  scrollToDiv() {
    document.getElementById("resForm")!.scrollIntoView();
  }
  maxtable() {
    if(this.noc>this.rest.numTables*6){
      this.noc =1;
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
    if(!this.update){if(this.time!="Time Slots"&&this.noc){
      let data = {sepcialReq:this.req || "N/A",numberOfSeats:this.noc,reservationTime:this.time,restaurantId:this.r.resid,customerId:this.auth.id,reservationName:this.auth.username};
      console.log(this.api.createReservation(data).subscribe(async data=>{
        await data;
        console.log(data);
        let snackBarRef = this.snackbar.open('Reservation Completed','My Reservations',{duration: 3000});
        snackBarRef.onAction().subscribe(()=>{
          this.router.navigate(['/myReservations']);
        })
        this.req="N/A";
        this.noc=1;
        this.time="Time Slots";
      }));

    }
    else
    {
      this.snackbar.open('Choose Time For Reservation','OK',{duration: 3000});
    }}
    else{
      let data = {sepcialReq:this.req,numberOfSeats:this.noc,reservationTime:this.time=="Time Slots"?null:this.time,reservationId:this.r.reservationToUP._id};
      console.log(this.api.updateReservation(data).subscribe(async data=>{
        await data;
        console.log(data);
        let snackBarRef = this.snackbar.open('Reservation Updated','My Reservations',{duration: 3000});
        snackBarRef.onAction().subscribe(()=>{
          this.router.navigate(['/myReservations']);
        })
      }));
    }
  }
}
