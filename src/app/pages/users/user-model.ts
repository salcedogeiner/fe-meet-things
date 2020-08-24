export class UserModel {
  Id: number;
  name: string;
  password: string;
  email: string;
  role: string;
}

export class FinancialModel {
  Id: number;
  Occupation: string;
  Profession: string;
  Incomes: number;
  IdUsers: UserModel;
}

export class CardModel {
  Id: number;
  Amount: number;
  Type: string;
  PayDay: number;
  Cvv: number;
  EndDate: string;
  Blocked: boolean;
  IdUsers: UserModel;
}
