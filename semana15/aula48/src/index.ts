import { JSONFileManager } from "./JSONFileManager"
import { UserAccount } from "./conta"
import * as fs from 'fs'

let opcao: string = process.argv[2]

const fileName: JSONFileManager = new JSONFileManager('userAccount.json')
const userAccountList: any = fileName.getObjectFromFIle()

switch (opcao) {
    case "criar":
        const newName: string = process.argv[3]
        const newAge: number = Number(process.argv[4])
        const newCpf: string = process.argv[5]
        const newUserAccount: UserAccount = new UserAccount(newName, newAge, newCpf)
        if (!(newAge < 18)) {
            try {
                userAccountList.push(newUserAccount)
                fileName.writeObjectToFile(userAccountList)
            } catch{
                console.log("erro")
            }
        } else {
            console.log("Menor de idade")
        }
        break;
    case "saldo":
        const cpfInserido: string = process.argv[3]
        userAccountList.map((item: any) => {
            if (item.cpf === cpfInserido) {
                return console.log("Saldo: R$", item.balance)
            }
        })
        break;
    case "addSaldo":
        try {
            const cpfInserido: string = process.argv[3]
            const novoSaldo: number = Number(process.argv[4])
            userAccountList.map((item: any) => {
                if (item.cpf === cpfInserido) {
                    item.balance+=novoSaldo
                    fileName.writeObjectToFile(userAccountList)
                }
            })
        } catch{
            console.log("erro")
        }
        break;

    default:
        console.log("Erro de opção selecionada")
        break;
}



/********** EXERCÍCIOS **********/
//1) Construtor serve para inicializar variáveis
//2) Somente 1 vez
//3) Com os métodos get e set
//4) Sim. console.log(userTest.getBalance())