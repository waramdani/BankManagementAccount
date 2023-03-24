import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { bankmanagementService } from '../bank-management.service';
import { bankmanagementaccount } from '../models/bank-management.model';


@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent {
  
  bankmanagementForm: FormGroup;
  isLoading = false;
  avatarUrl = '';
  bankmanagementaccount: bankmanagementaccount[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private bankmanagementService : bankmanagementService,
    private router: Router
  ) {
    this.bankmanagementForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        [this.validateName.bind(this)],
      ],
      lastname: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
      ],
      Image: [
        this.avatarUrl
      ],
      email: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
      ],
      gender :[
        '',
        [Validators.required],
      ],
      address: ['', Validators.required],
      balance:[]
    });
  }


  generateAvatar() {
    const url = 'https://avataaars.io/?avatarStyle=Transparent';
    const options = [
      'topType=ShortHairShortFlat',
      'accessoriesType=Blank',
      'hairColor=BlondeGolden',
      'facialHairType=MoustacheFancy',
      'facialHairColor=Auburn',
      'clotheType=BlazerShirt',
      'clotheColor=Pink',
      'eyeType=Wink',
      'eyebrowType=UpDownNatural',
      'mouthType=ScreamOpen',
      'skinColor=Pale'
    ];
    const randomOptions = options[Math.floor(Math.random() * options.length)];
    const avatarUrl = `${url}&${randomOptions}`;
    return avatarUrl;
  }

  submit() {
    this.isLoading = true;
    const avatarUrl = this.generateAvatar();
    this.bankmanagementService
      .createbankmanagementaccount({
        firstName:this.bankmanagementForm.value.firstname,
        lastName: this.bankmanagementForm.value.lastname,
        email: this.bankmanagementForm.value.email,
        gender: this.bankmanagementForm.value.gender,
        address: this.bankmanagementForm.value.address,
        image: avatarUrl,
        types: [{
          name: 'Default',
          balance: this.bankmanagementForm.value.balance
        }]
      })
      .subscribe((bankmanagementaccount: bankmanagementaccount) => {
        this.isLoading = false;
        this.bankmanagementForm.reset();
        this.router.navigate(['/']);
      });
  }

  getControl(controlName: string) {
    return this.bankmanagementForm.get(controlName);
  }

  canSubmit(): boolean {
    return this.bankmanagementForm.dirty && this.bankmanagementForm.valid;
  }

  validateName(
    control: AbstractControl
  ): Observable<{ nameExists: boolean } | null> {
    return this.bankmanagementService.getbankmanagementaccountByName(control.value).pipe(
      map((bankmanagementaccount: bankmanagementaccount[]) => {
        if (bankmanagementaccount.length > 0) {
          return { nameExists: true };
        }
        return null;
      })
    );
  }
}
