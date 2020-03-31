/**************EXERCÍCIO 1*************
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
 
________________________________________________________________________________________________________________________
RESPOSTA

O código recebe um número e opera módulo 2, 
realizando um teste de ímpar ou par, caso seja par, 
o resultado é "passou no teste", caso ímpar, "não passou no teste".
________________________________________________________________________________________________________________________
*/

/**************EXERCÍCIO 2*************
let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM d.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
____________________________________________________________________________________________________________________
RESPOSTA

a. O código acima recebe uma string que se corresponder a 
alguma fruta do switch case, retorna um valor específico, caso 
a string inserida não corresponda aos switchs, retorna o valor 5.

b. Se o valor de for "Maçã", retorna "O preço da fruta  Maçã  é  R$  2.25".

c. O preço de 2 laranjas, 1 maçã, 3 bananas e 1 uvao será 24.55.

d. A mensagem impressa no console se retirássemos o break seria 
"O preço da fruta  Pêra  é  R$  5"
________________________________________________________________________________________________________________________
*/

/**************EXERCÍCIO 3*************
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")
if(numero1 > 0 && numero2 > 0) {
    let mensagem
    if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
    } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
    }
}
console.log(mensagem)
____________________________________________________________________________________________________________________
RESPOSTA 

Retorna o seguinte erro: "index.js:70 Uncaught ReferenceError: mensagem is not defined
at index.js:70"
Porque o console.log(mensagem) está fora das condicionais
________________________________________________________________________________________________________________________
*/

/**************EXERCÍCIO 4*************
let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira um número: "));
if (num1 > num2 ){
    console.log("O número " + num1 + " é maior que o número " + num2)
} else if (num1 < num2 ){
    console.log("O número " + num2 + " é maior que o número " + num1)
} else{
    console.log("O número " + num1 + " é igual ao número " + num2)
}

Se os números forem iguais, retona "O número x é igual ao número y"

let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira um número: "));
let num3 = Number(prompt("Insira um número: "));
let aux = num1;

if (!((num1 === num2) && (num2 === num3))){
    if (num2 > num1 ){
    aux = num2;
    num2 = num1;
    num1 = aux;
    }
    if (num3 > num1){
    aux = num1;
    num1 = num3;
    num3 = aux;
    }
    if (num3 > num2){
    aux = num2;
    num2 = num3;
    num3 = aux;
    }
    console.log(num1)
    console.log(num2)
    console.log(num3)
} else {
    console.log("Ao meno um numero deve ser diferente")
}

retona a mensagem "Ao meno um numero deve ser diferente"
*/

/**************EXERCÍCIO 5*************
let notocorda = prompt("O animal possui notocorda no período embrionário? [s/n]");;
if (notocorda == "s"){
    let pelos = prompt("O animal possui pelos? [s/n]");
    if (pelos == "n"){
        let penas = prompt("O animal possui penas? [s/n]")
        if (penas == "n"){
            let cutanea = prompt("O animal realiza respiração cutânea? [s/n]")
            if (cutanea == "n"){
                let branquia = prompt("O animal possui branquias? [s/n]")
                if (branquia == "s"){
                    console.log("O animal é um peixe")
                } else {
                    console.log("O animal é um reptil")
                }
            } else {
                console.log("O animal é um anfíbio")
            }
        } else {
            console.log("É uma ave")
        } 
    } else {
        let racional = prompt("É considerado um animal racional? [s/n]")
        if (racional == "s"){
            console.log("É um humano")
        } else {
            console.log("É um mamífero não humano")
        }
    }

} else{
    console.log("Invertebrado")
}
________________________________________________________________________________________________________________________

Árvore condicional: https://drive.google.com/open?id=1KG5NKZGwWkZPI5HQ31izzq7U-BR5FKHd

________________________________________________________________________________________________________________________*/

/************** D E S A F I O *************
const nome = prompt("Nome:")
let tipo = prompt("Internacional ou domestico? [IN/DO]")
let etapa = prompt("Tipo de jogo [SF/DT/FI]:")
let categoria = Number(prompt("Categoria [1/2/3/4]"))
let ingressos = Number(prompt("Quantidade de ingressos:"))
let tipoaux = tipo;
let etapaaux = etapa;
let categoriaaux = categoria;
let ingressosaux = ingressos;
let precouni = 0;
let precototal = 0;
switch (etapa){
    case "SF":
        etapaaux = "Etapa do jogo: Semifinais"
        switch (categoria){
            case 1:
                precouni = 1320;
                break;
            case 2:
                precouni = 880;
                break;

            case 3:
                precouni = 550;
                break;

            case 4:
                precouni = 220;
                break;
        }
        break;
    case "DT":
        etapaaux = "Etapa do jogo: Decisão do terceiro lugar"
        switch (categoria){
            case 1:
                precouni = 660;
                break;
            case 2:
                precouni = 440;
                break;

            case 3:
                precouni = 330;
                break;

            case 4:
                precouni = 170;
                break;
        }
        break;
    case "FI":
        etapaaux = "Etapa do jogo: Finais"
        switch (categoria){
            case 1:
                precouni = 1980;
                break;
            case 2:
                precouni = 1320;
                break;

            case 3:
                precouni = 880;
                break;

            case 4:
                precouni = 330;
                break;
        break;
        }
}
switch (tipo){
    case "IN":
        tipoaux = "Tipo do jogo: Internacional"
        precouni *= 5.21
        break;
    case "DO":
        tipoaux = "Tipo do jogo: Nacional"
        break;
}
console.log("Nome do cliente: " + nome)
console.log(tipoaux)
console.log(etapaaux)
console.log("Categoria: " + categoria)
console.log("Quantidade de ingressos: " + ingressos)
console.log("Valor do ingresso: "+ precouni)
console.log("Valor Total: "+ precouni * ingressos);*/