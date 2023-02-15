import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags():Tag[]{
    return [
    { name: 'Todos', count: 7},
    { name: 'nacional', count: 4},
    { name: 'internacional', count: 3},
    { name: 'fruta', count: 4},
    { name: 'vegetales', count: 2},
    { name: 'semillas', count: 1},
    { name: 'rojo', count: 4},
  ]
  }

  getAllFoodsByTag(tag:string): Food[]{
    if(tag =='Todos')
      return this.getAll();
    else 
      return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return [
     {
      id:1,  
      name:'Manzana',
      price:79,
      tags:['fruta','rojo','nacional'],
      favorite: true,
      stars:4.5,
      imageUrl: '/assets/images/apples.jpg',
      origins: 'Uruguay'
     },

     {
      id:2,  
      name:'Frutilla',
      price:89,
      tags:['fruta','rojo','internacional'],
      favorite: true,
      stars:5,
      imageUrl: '/assets/images/frutillas.jpg',
      origins: 'Argentina'
     },

     {
      id:3,  
      name:'Morron',
      price:119,
      tags:['vegetales','rojo','nacional'],
      favorite:false,
      stars:4,
      imageUrl: '/assets/images/morron.jpg',
      origins: 'Uruguay'
     },

     {
      id:4,  
      name:'Nueces',
      price:200,
      tags:['semillas','internacional'],
      favorite: true,
      stars:5,
      imageUrl: '/assets/images/nueces.jpg',
      origins: 'Brasil'
     },

     {
      id:5,  
      name:'Pera',
      price:85,
      tags:['fruta','amarillo','nacional'],
      favorite: false,
      stars:4,
      imageUrl: '/assets/images/peras.jpg',
      origins: 'Uruguay'
     },

     {
      id:6,  
      name:'Tomate',
      price:120,
      tags:['vegetales','rojo','internacional'],
      favorite: true,
      stars:5,
      imageUrl: '/assets/images/tomates.jpg',
      origins: 'Argentina'
     },

     {
      id:7,  
      name:'Uvas',
      price:79,
      tags:['fruta', 'nacional'],
      favorite: true,
      stars:5,
      imageUrl: '/assets/images/uvas.jpg',
      origins: 'Uruguay'
     },

    ]
  }
}
