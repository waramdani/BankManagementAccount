import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { bankmanagementaccount } from "./models/bank-management.model";
import { bankmanagementaccountFormData } from "./models/pokemon-form-data.model";



const API_URL = 'http://localhost:3001/customers';

@Injectable({
    providedIn: 'root',
  })
  
export class bankmanagementService{

    constructor (private http: HttpClient){}
        
        getBankManagementAccount():Observable<bankmanagementaccount[]>{
            return this.http.get<bankmanagementaccount[]>(API_URL);
        }   


        UpdateBankManagementAccount(bankmanagementaccount: bankmanagementaccount): Observable<bankmanagementaccount> {
            console.log(bankmanagementaccount);
            return this.http.put<bankmanagementaccount>(`${API_URL}/${bankmanagementaccount.id}`, bankmanagementaccount);
        }
        
        deletebankmanagementaccount(bankmanagementaccount: bankmanagementaccount) {
            return this.http.delete(`${API_URL}/${bankmanagementaccount.id}`);
        }
        
        search(name: string): Observable<bankmanagementaccount[]> {
            return this.http.get<bankmanagementaccount[]>(`${API_URL}?q=${name}`);
        }
        
        getById(id: number): Observable<bankmanagementaccount> {
            return this.http.get<bankmanagementaccount>(`${API_URL}/${id}`);
        }
        
        createbankmanagementaccount(bankmanagementaccountFormData: bankmanagementaccountFormData): Observable<bankmanagementaccount> {
            return this.http.post<bankmanagementaccount>(API_URL, bankmanagementaccountFormData);
        }
        
        getbankmanagementaccountByName(name: string): Observable<bankmanagementaccount[]> {
            return this.http.get<bankmanagementaccount[]>(`${API_URL}?name=${name}`);
        }
}