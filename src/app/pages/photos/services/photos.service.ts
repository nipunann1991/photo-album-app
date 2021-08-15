import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from '../../../../environments/environment';
import { PhotosTemplate, PhotosResultsTemplate } from "../models/photos.template";

const albumAPI = environment.ALBUMS_API_URL;

@Injectable({
  providedIn: 'root'
})
export class PhotosService { 

  constructor( private http: HttpClient) { }

  getPhotos(albumId: number): Observable<PhotosTemplate[]>{
    return this.http.get<PhotosTemplate[]>(albumAPI +'photos?albumId='+ albumId);
  } 
  
}
