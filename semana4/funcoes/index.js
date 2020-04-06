/************ EXERCÍCIO 1 **********
const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
                array.push(j)
			}
	}
	return array
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(5))
console.log(minhaFuncao(8))
_________________________________________________________________________________
RESPOSTA

a. []
b. (6) [0, 1, 0, 1, 2, 3]
c. (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
_________________________________________________________________________________*/

/************ EXERCÍCIO 2 **********
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

let arrayDeNumeros = ["10", "11", "22", "33", "44"];

const funcao2 = (novalista, num) => {
  for (let i = 0; i < novalista.length; i++) {
    if (novalista[i] === num) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, "10"));
console.log(funcao(arrayDeNumeros, "22"));
console.log(funcao(arrayDeNumeros, "333"));
_________________________________________________________________________________
RESPOSTA
a.  0
    2
    undefined
b. Funcionaria, independente de numero ou String, as funções são executadas 
corretamente, havendo a comparação de todos os itens da array e retornando
suas posições.
_________________________________________________________________________________
*/

/************ EXERCÍCIO 3 **********
let array = [1, 2, 3, 4, 5]
console.log(metodo(array))
function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];

    for (let x of array) {
        resultadoA += x;
        resultadoB *= x;
    }

    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
    console.log(arrayFinal)
}
_________________________________________________________________________________
RESPOSTA
Essa função retorna um arrayFinal com a soma dos números da array e a 
multiplicação dos números da array.
Um bom nome seria somaProduto.
_________________________________________________________________________________*/




/************ EXERCÍCIO 4 **********
console.log(dogAge(4))
function dogAge (humanAge){
    return humanAge*7
}

let rEstudante = " e sou estudante."
let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Qual é a sua idade?"))
let endereco = prompt("Qual é o seu endereço?")
let estudante = confirm("Você é estudante?")
console.log(about(nome, idade, endereco, estudante))

function about(nome, idade, endereco, estudante){
    let frase = "Eu sou " + nome + ", tenho " + idade + " anos, moro em aaa" + endereco
    if (estudante == true){
        frase += " e sou estudante"
    } else {
        frase+= " e não sou estudante."
    }
    return frase
}
*/


/************ EXERCÍCIO 5 **********
let ano = prompt("ano")
let frase = "O ano " + ano + " pertence ao século "
let aux = 0
seculo(ano)
function seculo(ano) {
    if ((ano % 100) !== 00) {
        aux = Math.trunc((ano / 100) + 1)
    } else {
        aux = ano / 100
    }
    switch (aux) {
        case 10:
            console.log(frase += "X")
            break;
        case 11:
            console.log(frase += "XI")
            break;
        case 12:
            console.log(frase += "XII")
            break;
        case 13:
            console.log(frase += "XIII")
            break;
        case 14:
            console.log(frase += "XIV")
            break;
        case 15:
            console.log(frase += "XV")
            break;
        case 16:
            console.log(frase += "XVI")
            break;
        case 17:
            console.log(frase += "XVII")
            break;
        case 18:
            console.log(frase += "XVIII")
            break;
        case 19:
            console.log(frase += "XIX")
            break;
        case 20:
            console.log(frase += "XX")
            break;
        case 21:
            console.log(frase += "XXI")
            break;
        
    }
}
*/

/************ EXERCÍCIO 6 **********
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
tamanho = tamanhoArray(array)
console.log("a. Tamanho da array: " + tamanhoArray(array))
console.log("b. O tamanho da array é par? " + "\n" + parimpar(tamanho))
console.log("c. A quantidade de numeros pares é: " + pares(array))
console.log("d. A quantidade de numeros pares é: " + pares2(array))

function tamanhoArray(array) {
    return array.length
}
function parimpar(tamanho) {
    if ((tamanho % 2) == 0) {
        return true
    } else {
        return false
    }
}
function pares(array) {
    let contador = 0
    for (let itemPar of array) {
        if ((itemPar % 2) == 0) {
            contador++
        }
    }
    return contador
}
function pares2(array) {
    let contador2 = 0
    for (let i = 0; i < array.length; i++) {
        if ((parimpar(array[i])) == true) {
            contador2++
        }
    }
    return contador2
}
*/

