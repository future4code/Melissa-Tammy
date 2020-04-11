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

