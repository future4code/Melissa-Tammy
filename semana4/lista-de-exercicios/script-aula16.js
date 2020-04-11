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