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
                console.log(newUserAccount.getBalance())
                userAccountList.push(newUserAccount)
                fileName.writeObjectToFile(userAccountList)
                console.log(newUserAccount.getCpf())

            } catch{
                console.log("erro")
            }
        } else {
            console.log("Menor de idade")
        }
        break;
    case "saldo":
        const cpfInserido: string = process.argv[2]
        userAccountList.map((item: UserAccount) => {
            console.log(item.getCpf())
            // if (item.getCpf() === cpfInserido) {
            //     return console.log("Saldo: R$", item.getBalance())
            // }

        })
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