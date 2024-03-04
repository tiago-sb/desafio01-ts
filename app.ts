import { ChildrenAccount } from './class/ChildrenAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const conta_joao = new PeopleAccount(1, 'joão', 1001, 100.56)
const conta_teves = new PeopleAccount(2, 'teves', 1002, 151.97)
console.log(conta_joao.getName())
console.log(conta_joao.getBalance())
conta_joao.deposit(45.63)
console.log(conta_joao.getBalance())

console.log(conta_teves.getName())
console.log(conta_teves.getBalance())
conta_teves.withdraw(50.84)
console.log(conta_teves.getBalance())


const conta_DIO = new CompanyAccount('DIO', 1003, 10000.00)
console.log(conta_DIO.getName())
conta_DIO.getLoan(4000.00)
console.log(conta_DIO.getBalance())

const conta_joaninha = new ChildrenAccount('joaninha', 1004, 0)
console.log(conta_joaninha.getName())
conta_joaninha.depositChildren(100.00)
console.log(conta_joaninha.getBalance())


