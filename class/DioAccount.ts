export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number, balance: number){
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
  }

  getName = (): string => {
    return `${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`
  }

  getBalance = (): string => {
    return `saldo atual da conta de ${this.name} R$ ${this.balance.toFixed(2)}`
  }

  deposit = (value: number): string => {
    if(this.validateStatus()) {
      this.balance = this.balance + value
    }

    return this.getBalance()
  }

  withdraw = (value: number): string => {
    if(this.validateStatus() && this.balance >= value) {
        this.balance = this.balance - value
    }

    return this.getBalance()
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
