import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bankmanagementaccount } from '../models/bank-management.model';
import { bankmanagementService } from '../bank-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  bankmanagementaccounts: bankmanagementaccount[]=[];
  @Input() bankmanagementaccount?:bankmanagementaccount;
  @Input() isDeleteLoading = false;
  @Output() changeValue = new EventEmitter<any>();
  @Output() delete = new EventEmitter<bankmanagementaccount>();
  
  constructor(
    private bankmanagementService: bankmanagementService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap((params) => this.bankmanagementService.getById(params['id'])))
      .subscribe({
        next: (p) => (this.bankmanagementaccount = p),
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });
  }

  onFirstNameChange(value: any) {
    console.log(value);
    this.changeValues({value, key: 'firstName', bankmanagementaccount: this.bankmanagementaccount });
  }

  onLastNameChange(value: any) {
    console.log(value);
    this.changeValues({value, key: 'lastName', bankmanagementaccount: this.bankmanagementaccount });
  }

  onEmailChange(value: any) {
    console.log(value);
    this.changeValues({value, key: 'email', bankmanagementaccount: this.bankmanagementaccount });
  }


  onGenderChange(value: any) {
    console.log(value);
    this.changeValues({value, key: 'gender', bankmanagementaccount: this.bankmanagementaccount });
  }

  onAdressChange(value: any) {
    console.log(value);
    this.changeValues({value, key: 'address', bankmanagementaccount: this.bankmanagementaccount });
  }


  changeValues(event: any) {
    const { value, key, bankmanagementaccount } = event;
    this.bankmanagementService
      .UpdateBankManagementAccount({ ...bankmanagementaccount, [key]: value })
      .subscribe((updatedbankmanagement) => {
        this.bankmanagementaccounts = this.bankmanagementaccounts.map((p) => {
          if (p.id === updatedbankmanagement.id) {
            return updatedbankmanagement;
          }
          console.log("error",p)
          return p;
          
        });
      });
  }
  
  onDelete() {
    this.delete.emit(this.bankmanagementaccount);
  }
}
