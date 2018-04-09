import { Injectable } from '@angular/core';
import { Image } from '../shared/image.interface';

@Injectable()
export class ImagesService {

  private images: Image[];

  constructor() {

    this.images = [
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer2.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer3.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer4.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer5.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer6.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/eggs1.jpg", type:"Breakfast"},
      { title: "Burguer & Chips", url:"./assets/img/eggs2.jpg", type:"Breakfast"},
      { title: "Burguer & Chips", url:"./assets/img/eggs3.jpg", type:"Breakfast"},
      { title: "Burguer & Chips", url:"./assets/img/kebab1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/kebab2.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pasta1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pasta2.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pasta3.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pizza1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pizza2.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pizza3.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pizza4.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/pizza5.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/steak1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/steak2.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/steak3.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/steak4.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"},
      { title: "Burguer & Chips", url:"./assets/img/burguer1.jpg", type:"Burguer"}
     
    ]
   

   }

   getImagesAll(){
     return this.images;
   }


}


