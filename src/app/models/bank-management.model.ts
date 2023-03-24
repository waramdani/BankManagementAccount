
interface Type {
    name: string;
    balance: number;
  }

export interface bankmanagementaccount{

    id: number,
    firstName: string,
    lastName: string,
    image: string;
    email: string,
    gender: string,
    address: string,
    lastSeen?: string;
    captured?: boolean,
    types: Type[];
}

