import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortOrderTemplate } from "../models/sort.template";

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private listenToSort = new BehaviorSubject('');
  sortBytitle = this.listenToSort.asObservable();

  constructor() { }

  sortData(sort: string) {
    this.listenToSort.next(sort)
  }

  sortDataByTitle(sort: string, data: SortOrderTemplate[]){ 
  
    switch (sort) {
      case '0':
        this.sortOrder(data);
        break;

        case '1':
        this.sortOrder(data).reverse(); 
        break; 
    } 
    
  }
 
  sortOrder(data: SortOrderTemplate[]){
    return data.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    }); 
  }

}
