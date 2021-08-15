import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { AlbumsService } from "../albums/services/albums.service";
import { SortService } from "../../common/sort/services/sort.service";
import { PhotosService } from "../photos/services/photos.service";
import { AlbumResultsTemplate, AlbumTemplate, AlbumDataTemplate } from "../albums/models/album.template";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumResults!: AlbumResultsTemplate;
  userId: number = 2;
  filerAlbum: number = 16;  
  albumData: Array<AlbumDataTemplate> = [];
  isLoaded: boolean = false;

  constructor(
    private albums: AlbumsService,
    private photos: PhotosService,
    private router: Router,
    private sort: SortService,
  ) { }

  ngOnInit(): void {
    this.getAlbums(this.userId);  
    this.sortAlbumData();
  } 

  getAlbums(userId: number){
    this.isLoaded = false;
    this.albums.getAlbums(userId).pipe(
      map((data) => data.filter((x: AlbumTemplate) => x.id != this.filerAlbum )), 
       
    ).subscribe({
      next: (res) =>{  
        this.albumResults = res; 
        res.forEach((x, i) => this.getAlbumPhotoData(x.id, i));
        this.isLoaded = true;  
      },
      error: err =>{ 
        console.log(err);
      }
    })

  }

  getAlbumPhotoData(albumId: number, index: number){

    this.photos.getPhotos(albumId).subscribe({
      next: res =>{  
        this.albumData.push({ ...this.albumResults[index], photosCount: res.length, thumbnailUrl: res[0].thumbnailUrl})  
        this.sort.sortDataByTitle("0", this.albumData); 
      },
      error: err => { 
        console.log(err);
      }
    }); 
      
  }

  
  viewPhotos(id: number, index: number){
    this.albums.setAlbumTitle(this.albumData[index].title); 
    this.router.navigate(['/photos/'+id]); 
  } 

  sortAlbumData(){
    this.sort.sortBytitle.subscribe((sort: string) => {
      this.sort.sortDataByTitle(sort, this.albumData);
    })
  }

}

