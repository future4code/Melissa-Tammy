"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const conta_1 = require("./conta");
let opcao = process.argv[2];
const fileName = new JSONFileManager_1.JSONFileManager('userAccount.json');
const userAccountList = fileName.getObjectFromFIle();
switch (opcao) {
    case "criar":
        const newName = process.argv[3];
        const newAge = Number(process.argv[4]);
        const newCpf = process.argv[5];
        const newUserAccount = new conta_1.UserAccount(newName, newAge, newCpf);
        if (!(newAge < 18)) {
            try {
                userAccountList.push(newUserAccount);
                fileName.writeObjectToFile(userAccountList);
            }
            catch (_a) {
                console.log("erro");
            }
        }
        else {
            console.log("Menor de idade");
        }
        break;
    case "saldo":
        const cpfInserido = process.argv[3];
        userAccountList.map((item) => {
            if (item.cpf === cpfInserido) {
                return console.log("Saldo: R$", item.balance);
            }
        });
        break;
    case "addSaldo":
        try {
            const cpfInserido = process.argv[3];
            const novoSaldo = Number(process.argv[4]);
            userAccountList.map((item) => {
                if (item.cpf === cpfInserido) {
                    item.balance += novoSaldo;
                    fileName.writeObjectToFile(userAccountList);
                }
            });
        }
        catch (_b) {
            console.log("erro");
        }
        break;
    default:
        console.log("Erro de opção selecionada");
        break;
}
//# sourceMappingURL=index.js.map