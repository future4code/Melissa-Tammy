import * as fs from 'fs'
import { MemoryMeasurement } from 'vm'
import moment from 'moment'

type usuario = {
    nome: string,
    cpf: string,
    dtNasc: string,
    conta: transacao[] | null
}

type transacao = {
    data: string,
    descricao: string,
    valor: number,
}

const opcao: number = Number(process.argv[2])

const usersFilePath = "C:/Users/Meltammy/Desktop/Melissa-Tammy/semana14/projeto/users.json";
const userFileData: Buffer = fs.readFileSync(usersFilePath);
const usersString: string = userFileData.toString();

const users: any[] = JSON.parse(usersString)

/*let nomeInserido: string = process.argv[3]
let cpfInserido: string = process.argv[4]
let dtNascInserido: string = process.argv[5]*/



function criarUsuario(novoUsuario: usuario): void {
    users.push(novoUsuario)
    const userStringfied = JSON.stringify(users, null, 2)
    fs.writeFileSync("users.json", userStringfied)
    return console.log("Cadastrado!")
}

switch (opcao) {
    case 1:
        let novaTransacao: transacao = {
            data: "12-45-63",
            descricao: "Add money",
            valor: 50
        }
        users.map(us => {
            if (us.cpf == process.argv[3]) {
                us.conta!.push(novaTransacao)
                const userStringfied = JSON.stringify(users, null, 2)
                fs.writeFileSync("users.json", userStringfied)
            }
        })
        case 2:
            let nomeInserido: string = process.argv[3]
            let cpfInserido: string = process.argv[4]
            let dtNascInserido: string = process.argv[5]
            let newUser: usuario = {
                nome: nomeInserido,
                cpf: cpfInserido,
                dtNasc: dtNascInserido,
                conta: []
            }
            try {
                console.log(newUser)
                criarUsuario(newUser)
            } catch{
                console.log("erro")
            }
            break;
}