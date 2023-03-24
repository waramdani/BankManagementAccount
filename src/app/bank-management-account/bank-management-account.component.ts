import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bankmanagementaccount } from '../models/bank-management.model';

@Component({
  selector: 'app-bank-management-account',
  templateUrl: './bank-management-account.component.html',
  styleUrls: ['./bank-management-account.component.css']
})
export class BankManagementAccountComponent {

  @Input() bankmanagementaccount?:bankmanagementaccount;
  @Input() isDeleteLoading = false;

  @Output() capture = new EventEmitter<bankmanagementaccount>();
  @Output() changeValue = new EventEmitter<any>();
  @Output() delete = new EventEmitter<bankmanagementaccount>();


}
