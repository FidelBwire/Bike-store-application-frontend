import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: string = 'http://localhost:8989/production/image/';

  constructor(private httpClient: HttpClient) { }

  getImage(imageId: number): Observable<Image> {
    return this.httpClient.get<Image>(`${this.baseUrl}` + imageId);    
  }
}
