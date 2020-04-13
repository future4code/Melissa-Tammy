/*___________F U N Ç Õ E S - A R R A Y______________________________*/

/************ EXERCÍCIO 1 ************
//usando for:
let array = []
for (i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 100))
}
console.log(array)
for (i=0; i<array.length; i++){
    console.log(`Usando For, é ${array[i]}`)
}
//Usando for of
for (let item of array){
    console.log(`Usando for of, é ${item}`)
}
//Usando while
let percorre = 0
while (percorre < array.length){
    console.log(`Usando for while, é ${array[percorre]}`)
    percorre++
}
*/

/************ EXERCÍCIO 2 ************
const array = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]
let arrayAdultos = []
let arrayNovinhos = []
array.forEach((pessoa, index, array) => {
    if (pessoa.idade >= 20){
        arrayAdultos.push(pessoa)
    } else {
        arrayNovinhos.push(pessoa)

    }
    
})
console.log(arrayAdultos, arrayNovinhos)
*/

/************ EXERCÍCIO 3 ************
const array = [1, 2, 3, 4, 5, 6]
let arrayMultiplica = []
function funcaoMultiplica(array) {
    array.forEach((numero, index, arr) => {
        arrayMultiplica.push(numero * 2)
    })
    return arrayMultiplica
}
let arrayMultiplica3 = []
function funcaoMultiplica3(array) {
    array.forEach((numero, index, arr) => {
        arrayMultiplica3.push(String((numero * 3)))
    })
    return arrayMultiplica3
}
function funcaoString(array){
    let arrayAux = []
    array.forEach((numero, index, arr) => {
        if (numero % 2 === 0){
                    arrayAux.push(`${numero} é par`)

        } else {
            arrayAux.push(`${numero} é impar`)

        }
    })
    return arrayAux
}
console.log(array)
console.log(funcaoMultiplica(array))
console.log(funcaoMultiplica3(array))
console.log(funcaoString(array))
*/

/************ EXERCÍCIO 4 ************
const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8 },
    { nome: "João", idade: 20, altura: 1.3 },
    { nome: "Pedro", idade: 15, altura: 1.9 },
    { nome: "Luciano", idade: 22, altura: 1.8 },
    { nome: "Artur", idade: 10, altura: 1.2 },
    { nome: "Soter", idade: 70, altura: 1.9 }
]
let permitido = []
let npermitido = []
function permissao(array){
    array.forEach((pessoa, index, arr) => {
        if ((pessoa.altura >= 1.5)&&(pessoa.idade >= 14)&&(pessoa.idade < 60)){
            permitido.push(pessoa)
        } else {
            npermitido.push(pessoa)
        }
    })
    console.log(permitido, npermitido)
}
permissao(pessoas)
*/

/************ EXERCÍCIO 5 ************
const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]
let arrayCancelado = []
let arrayMarcado = []
let arrayGenero = ["Sr.", "Sra.", "lembra-lo", "lembra-la"]
let arrayAux = []
function mensagem(consultas) {
    consultas.filter(pessoa => {
        if (pessoa.cancelada === true) {
            arrayCancelado.push(pessoa)

        } else {
            arrayMarcado.push(pessoa)

        }
    })
    arrayAux = arrayCancelado
    arrayCancelado = []
    arrayAux.filter(pessoa => {
        if (pessoa.genero === "feminino") {
            arrayCancelado.push(`Olá, ${arrayGenero[1]} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        } else {
            arrayCancelado.push(`Olá, ${arrayGenero[0]} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
        }
    })
    arrayAux = arrayMarcado
    arrayMarcado = []
    arrayAux.filter(pessoa => {
        if (pessoa.genero === "feminino") {
            arrayMarcado.push(`Olá, ${arrayGenero[1]} ${pessoa.nome}. Estamos enviando esta mensagem para ${arrayGenero[3]} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`)
        } else {
            arrayMarcado.push(`Olá, ${arrayGenero[0]} ${pessoa.nome}. Estamos enviando esta mensagem para ${arrayGenero[2]} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`)
        }
    })
}
mensagem(consultas)
console.log(arrayCancelado, arrayMarcado)
*/

/************ EXERCÍCIO 5 ************
const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]
contas.forEach((pessoa, index, array) => {
    for (i = 0; i < pessoa.compras.length; i++) {
        pessoa.saldoTotal -= pessoa.compras[i]       
    }
})
console.log(contas)
*/