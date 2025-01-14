import { DioAccount } from './DioAccount'

export class ChildrenAccount extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number) {
        super(name, accountNumber, balance)
    }

    depositChildren = (value: number): void => {
        this.deposit(value + 10)
    }
}

