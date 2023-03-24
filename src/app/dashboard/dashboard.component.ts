import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bankmanagementaccount } from '../models/bank-management.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: bankmanagementaccount[] = [];
  totalBalance = 0;
  totalCustomers = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ customers: bankmanagementaccount[] }>('assets/db.json')
      .subscribe(data => {
        this.customers = data.customers;
        this.totalCustomers= data.customers.length;
       
        for (let customer of this.customers) {
          for (let type of customer.types) {
            this.totalBalance += type.balance;
          }
        }
      });
  }
}
