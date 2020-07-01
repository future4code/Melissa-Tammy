"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class Transaction {
    constructor(newDdate, newValue, newDescription) {
        this.date = newDdate;
        this.value = newValue;
        this.description = newDescription;
    }
}
class UserAccount {
    constructor(newName, newAge, newCpf) {
        this.name = newName;
        this.age = newAge;
        this.cpf = newCpf;
        this.balance = 0;
        this.transactions = [];
    }
    getCpf() {
        return this.cpf;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
        console.log('Saldo atualizado com sucesso');
    }
}
exports.UserAccount = UserAccount;
class Bank {
    constructor(accounts, fileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager;
    }
    createAccount(userAccount) {
    }
    getAllAccounts() {
        return;
    }
    getAccountByCpfAndName(cpf, name) {
        return;
    }
}
//# sourceMappingURL=conta.js.map