// A)_____________________________________
let minhaString: string = "Mel"
//minhaString = 5
let respostaA: string = "Ocorre um erro ao atribuir um número a uma variável com tipo string"
console.log("a) ", respostaA)

// B)_____________________________________
let meuNumero: number | string = 21
let respostaB: string = "Atribuir o tipo 'number | string', ou any, à variável meuNumero, possibilita a variável receber numeros e letras"
console.log("b) ", respostaB)

// C)_____________________________________
enum CorArcoIris {
    VERMELHO = "VERMELHO",
    ALARANJADO = "ALARANJADO",
    AMARELO = "AMARELO",
    VERDE = "VERDE",
    AZUL = "AZUL",
    ANIL = "ANIL",
    VIOLETA = "VIOLETA"
}
type pessoa = {
    nome: string,
    idade: number,
    corFav: CorArcoIris
}
const melissa: pessoa = {
    nome: "Melissa",
    idade: 21,
    corFav: CorArcoIris.ALARANJADO
}
let respostaC: string = "Para criar um objeto com propriedades específicas podemos declarar uma variável de tipo, que recebe as propriedades que definirmos"
console.log("c) ", respostaC)

// D)_____________________________________
const vitor: pessoa = {
    nome: "Vitor",
    idade: 24,
    corFav: CorArcoIris.AMARELO
}
const rafael: pessoa = {
    nome: "Rafael",
    idade: 13,
    corFav: CorArcoIris.ANIL
}
const amanda: pessoa = {
    nome: "Amanda",
    idade: 21,
    corFav: CorArcoIris.AZUL
}

// E)_____________________________________
const exercicioCod: string = "Exercício de código."
console.log("d) ", exercicioCod, " linha 36 a 50", "\ne) ", exercicioCod, " linha 13 a 21")