import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getAllRestaurants()
  {
    return this.http.get<any>(this.url+'/allrestaurants');
  }
  createReservation(data:any)
  {
    return this.http.post<any>(this.url+'/createReservation',data);
  }
}
