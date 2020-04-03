/*****************EXERCICIO 1************* 
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
  console.log(sum);
}
console.log(sum);
_____________________________________________________________________________
RESPOSTA

A cada execução do for, ocorre as seguintes operações: i=i+1 e sum=sum+i, até que i seja igual a 14.

0
1
3
6
10
15
21
28
36
45
55
66
78
91
105
105
_____________________________________________________________________________
*/

/*****************EXERCICIO 2*************
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
_____________________________________________________________________________
RESPOSTA

a. o push adiciona um novo elemento no final da lista.
b. (4) [10, 15, 25, 30]
c. (6) [12, 15, 18, 21, 27, 30]; [12]
_____________________________________________________________________________
*/

/*****************EXERCICIO 3*************
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0;
for(let i=0; i<=array.length; i++){
    if (array[i] >= maior){
        maior = array[i]
    }
}
let menor = maior;
for (let i=0; i<=array.length; i++){
    if (array[i] <= menor){
        menor = array[i]
    }
}
console.log("a. maior número: " + maior + "\n" + "menor número: " + menor)
const novaArray = []
const numero = 2;
for(const item of array){
    if(item%numero === 0) {
      novaArray.push(item)
    }
}
console.log("b. " + novaArray)
const novaArrayString = []
for (let i=0; i<=array.length; i++){
    aux = "O elemento do índex " + i + " é: " + array[i];
    novaArrayString.push(aux)
}
console.log("c. " + novaArrayString)
*/

/***************** D E S A F I O   1 *************
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
_____________________________________________________________________________
RESPOSTA

0
00
000
0000
_____________________________________________________________________________
*/

/***************** D E S A F I O   2 e 3*************
const numeroResposta = Number(Math.floor(Math.random() * 100 + 1));
window.alert("vamos jogar! Adivinhe o número de 0 a 100")
let numeroChute = Number(prompt("Chute um número: "))
let contador = 0;
while (!(numeroResposta == numeroChute)){
    console.log("O número chutado foi: " + numeroChute + "\n" + "Errou!")
    if (numeroChute > numeroResposta){
        numeroChute = prompt("O numero é menor. Tente novamente: ")

    } else {
        numeroChute = prompt("O número é maior. Tente novamente: ")

    }
    contador++
} 
window.alert("Acertou! O número era: "+ numeroResposta + "\n" + "O número de tentativas foi:" + contador)
console.log("Acertou! O número era: "+ numeroResposta + "\n" + "O número de tentativas foi:" + contador)
_____________________________________________________________________________
RESPOSTA

Foi bem simples alterar para gerar um número aleatório, apenas substituí o valor da variável.
Não sei como seria mais facil.*/
