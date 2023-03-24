import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankManagementAccountComponent } from './bank-management-account.component';

describe('BankManagementAccountComponent', () => {
  let component: BankManagementAccountComponent;
  let fixture: ComponentFixture<BankManagementAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankManagementAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankManagementAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
