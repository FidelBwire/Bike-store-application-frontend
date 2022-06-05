import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  retrievedImage: any;
  @Input() imageId!: number;
  @Input() height: number = 2;
  @Input() width: number = 2;
  @Input() borderRadius: number = 1;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImage(1);
  }

  getImage(imageId: number) {
    this.imageService.getImage(imageId).subscribe(data => {
      this.retrievedImage = 'data:image/jpeg;base64,'+data.content;
    });
  }

}
