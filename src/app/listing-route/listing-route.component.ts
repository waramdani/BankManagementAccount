import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { bankmanagementaccount } from '../models/bank-management.model';
import { bankmanagementService } from '../bank-management.service';

@Component({
  selector: 'app-listing-route',
  templateUrl: './listing-route.component.html',
  styleUrls: ['./listing-route.component.css'],
})
export class ListingRouteComponent implements OnInit, OnDestroy {
  bankmanagementaccount: bankmanagementaccount[] = [];
  isDeleteLoading: any[] = [];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();

  constructor(private bankmanagementService: bankmanagementService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((query: string) => {
        this.search(query);
      });
  }

  ngOnInit(): void {
    this.bankmanagementService.getBankManagementAccount().subscribe((bankmanagementaccount) => {
      this.bankmanagementaccount = bankmanagementaccount;
      this.isDeleteLoading = bankmanagementaccount.map((p) => ({
        id: p.id,
        isLoading: false,
      }));
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  capture(bankmanagementaccount: bankmanagementaccount) {
    this.bankmanagementService
      .UpdateBankManagementAccount({ ...bankmanagementaccount, captured: !bankmanagementaccount.captured })
      .subscribe((updateUpdateBankManagementAccount) => {
        this.bankmanagementaccount = this.bankmanagementaccount.map((p) => {
          if (p.id === updateUpdateBankManagementAccount.id) {
            return updateUpdateBankManagementAccount;
          }
          return p;
        });
      });
  }

  changeValue(event: any) {
    const { value, key, pokemon } = event;
    this.bankmanagementService
      .UpdateBankManagementAccount({ ...pokemon, [key]: value })
      .subscribe((UpdateBankManagementAccount) => {
        this.bankmanagementaccount = this.bankmanagementaccount.map((p) => {
          if (p.id === UpdateBankManagementAccount.id) {
            return UpdateBankManagementAccount;
          }
          return p;
        });
      });
  }

  delete(bankmanagementaccount: bankmanagementaccount) {
    this.setIsLoading(bankmanagementaccount, true);
    this.bankmanagementService.deletebankmanagementaccount(bankmanagementaccount).subscribe(() => {
      this.bankmanagementaccount = this.bankmanagementaccount.filter((p) => p.id !== bankmanagementaccount.id);
      this.setIsLoading(bankmanagementaccount, false);
    });
  }

  getIsDeleteLoading(bankmanagementaccount: bankmanagementaccount) {
    return this.isDeleteLoading.find((p) => p.id === bankmanagementaccount.id)?.isLoading;
  }

  search(query: string) {
    this.bankmanagementService.search(query).subscribe((bankmanagementaccount) => {
      this.bankmanagementaccount = bankmanagementaccount;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  private setIsLoading(bankmanagementaccount: bankmanagementaccount, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((p) => {
      if (p.id === bankmanagementaccount.id) {
        return { ...p, isLoading };
      }
      return p;
    });
  }
}
