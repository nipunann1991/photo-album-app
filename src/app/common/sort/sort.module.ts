import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortRoutingModule } from './sort-routing.module';
import { SortComponent } from './sort.component';


@NgModule({
  declarations: [
    SortComponent
  ],
  imports: [
    CommonModule,
    SortRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SortComponent]
})
export class SortModule { }
