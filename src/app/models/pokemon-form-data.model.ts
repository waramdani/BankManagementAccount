import { bankmanagementaccount } from './bank-management.model';

export type bankmanagementaccountFormData = Omit<
bankmanagementaccount,
  'id' |'lastSeen' |'captured'| ''
>;
