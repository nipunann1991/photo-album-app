import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortService } from "../../common/sort/services/sort.service";
import { PhotosService } from "../photos/services/photos.service";
import { PhotosTemplate } from "../photos/models/photos.template";
import { AlbumsService } from "../albums/services/albums.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
 
  photoData: Array<PhotosTemplate> = []; 
  title: string = "";
  albumId: number = 0;
  isLoaded: boolean = false;

  constructor(
    private albums: AlbumsService,
    private photos: PhotosService,
    private activeRoute: ActivatedRoute,
    private sort: SortService,
  ) { 
    this.albumId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPhotos();
    this.sortPhotoData();
    
    this.albums.title.subscribe((title: string) => {   
      (title != "")? this.title = title: this.getAlbumTitle(); 
    });
 
  }

  getPhotos(){  
    this.isLoaded = false;
    this.photos.getPhotos(this.albumId).subscribe({
      next: (res) =>{   
          this.photoData = res;  
          this.sort.sortDataByTitle("0", this.photoData); 
          this.isLoaded = true;
      },
      error: err => { 
        console.log(err);
      }
    });  
  }

  getAlbumTitle(){
    this.albums.getAlbumDetails(this.albumId).subscribe({
      next: res =>{
       this.title = res[0].title;
      },
      error: err =>{ 
        console.log(err);
      }
    });
  }

  sortPhotoData(){
    this.sort.sortBytitle.subscribe((sort: string) => {
      this.sort.sortDataByTitle(sort, this.photoData);
    })
  }

}
