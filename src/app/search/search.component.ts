import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { bankmanagementService } from '../bank-management.service';
import { bankmanagementaccount } from '../models/bank-management.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  bankmanagementaccount: bankmanagementaccount[]=[];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private bankmanagementservice: bankmanagementService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }
  search(query: string) {
    this.bankmanagementservice.search(query).subscribe((bank) => {
      this.bankmanagementaccount = bank;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }
}
