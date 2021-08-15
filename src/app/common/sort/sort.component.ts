import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SortService } from "./services/sort.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  sortVals = [
    { id: 0, title: "Title ASC"  },
    { id: 1, title: "Title DESC"  }
  ];

  sortForm = new FormGroup({
    sortOrder: new FormControl(0), 
  });

  constructor(
    private sort: SortService,
    private router: Router
  ) { 

    this.router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          this.resetSortOrder();
        } 
    });

  }

  ngOnInit(): void {
    
  }

  sortByTilte(value: string){
    this.sort.sortData(value)
  }

  resetSortOrder(){
    this.sortForm.controls["sortOrder"].setValue(0);
  }
 
}
