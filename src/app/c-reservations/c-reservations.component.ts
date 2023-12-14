import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-reservations',
  templateUrl: './c-reservations.component.html',
  styleUrls: ['./c-reservations.component.css']
})
export class CReservationsComponent {
  constructor(private router:Router){}
  updateRes()
  {
    this.router.navigate(['/customer_h']);
  }
  deleteRes()
  {
    console.log('deleted');
  }
}
