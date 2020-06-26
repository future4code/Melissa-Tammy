//A)_________________________________________________________________________________________________
console.log("a) para acessar os parâmetros passados na linha de comando podemos utilizar o comando 'preocess.argv'")

//B)_________________________________________________________________________________________________
let nomeEx1: string = process.argv[2]
let idadeEx1: number = parseInt(process.argv[3]) //OU Number(process.argv[3])
console.log(`b) Olá, ${nomeEx1}! Você tem ${idadeEx1} anos.`)

//C)_________________________________________________________________________________________________
console.log(`b) Olá, ${nomeEx1}! Você tem ${idadeEx1} anos. Em sete anos você terá ${idadeEx1+7}`)
