import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOutletRoutingModule } from './page-outlet-routing.module';
import { PageOutletComponent } from './page-outlet.component';
import { HeaderModule } from 'src/app/common/header/header.module';
import { FooterModule } from 'src/app/common/footer/footer.module';


@NgModule({
  declarations: [
    PageOutletComponent
  ],
  imports: [
    CommonModule,
    PageOutletRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PageOutletModule { }
