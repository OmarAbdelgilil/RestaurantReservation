import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }
  restaurants:any[]=[{id:1,image:"https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",name:"gom3a fish",cat:"sea food",desc:"this is restaurant serve the best sea food in the world",notable:1},
  {id:2,image:"https://as1.ftcdn.net/v2/jpg/02/32/62/58/1000_F_232625881_AWlwstfOT14gGx12u0VrdjY1y2S9nbso.jpg",name:"sob7y grill",cat:"grills",desc:"this is restaurant serve the best grills in the world",notable:3},
  {id:3,image:"https://t3.ftcdn.net/jpg/01/10/04/56/240_F_110045647_G2dIiAPxt8G7onNhaxF5nDCaL0HTxKs4.jpg",name:"sedra",cat:"desserts",desc:"this is restaurant serve the best dessert in the world",notable:5}
]
resid!:number;
}
