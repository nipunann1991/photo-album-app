import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from '../../../../environments/environment';
import { AlbumTemplate, PhotosTemplate } from "../models/album.template";

const albumAPI = environment.ALBUMS_API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumTitle = new BehaviorSubject('');
  title = this.albumTitle.asObservable();

  constructor( private http: HttpClient) { }

  getAlbums(userId: number): Observable<AlbumTemplate[]>{
    return this.http.get<AlbumTemplate[]>(albumAPI +'albums?userId='+ userId);
  }

  getAlbumDetails(id: number): Observable<AlbumTemplate[]>{
    return this.http.get<AlbumTemplate[]>(albumAPI +'albums?id='+ id);
  }

  setAlbumTitle(sort: string) {
    this.albumTitle.next(sort)
  }

}
