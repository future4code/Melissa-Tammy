import { JSONFileManager } from "./JSONFileManager"

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(newDdate: string, newValue: number, newDescription: string) {
        this.date = newDdate
        this.value = newValue
        this.description = newDescription
    }
}

export class UserAccount {
    private name: string
    private age: number
    private cpf: string
    private balance: number
    private transactions: Transaction[]

    constructor(newName: string, newAge: number, newCpf: string) {
        this.name = newName
        this.age = newAge
        this.cpf = newCpf
        this.balance = 0
        this.transactions = []
    }

    public getCpf(): string {
        return this.cpf
    }
    public getBalance(): number {
        return this.balance
    }

    public addBalance(value: number): void {
        this.balance += value
        console.log('Saldo atualizado com sucesso')
    }
}

class Bank {
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager
    }

    public createAccount(userAccount: UserAccount): void {
        //lógica de criar conta aqui
    }

    public getAllAccounts(): UserAccount[] {
        return
        //lógica de pegar todas as contas aqui
    }

    public getAccountByCpfAndName(cpf: string, name: string):
        UserAccount | undefined {
        return
        // lógica de pegar conta pelo CPF e Nome aqui
    }
}
