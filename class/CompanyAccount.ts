import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance)
  }

  getLoan = (value: number): void => {
    this.deposit(value)
  }
  
}
