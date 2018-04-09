import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  public images: any[];
  
  constructor(public imagesService:ImagesService) {
    this.images = this.imagesService.getImagesAll();
   }

  ngOnInit() {
  }

}
