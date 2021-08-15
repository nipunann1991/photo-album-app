import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOutletComponent } from './page-outlet.component';

const routes: Routes = [
  { path: '', component: PageOutletComponent, children: [
    { path: 'home', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
    { path: '', loadChildren: () => import('../../pages/albums/albums.module').then(m => m.AlbumsModule) },
    { path: 'photos', loadChildren: () => import('../../pages/photos/photos.module').then(m => m.PhotosModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOutletRoutingModule { }
