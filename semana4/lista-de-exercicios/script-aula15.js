/*___________E X E R C Í C I O S - F U N Ç Õ E S______________________________*/

/************ EXERCÍCIO 1 ************
function funcaoArray(array) {
    let maiorNumero = Infinity;
    let menorNumero = 0;
    for (let numero of array) {
        if (numero < maiorNumero) {
            maiorNumero = numero
        }
        if (numero > menorNumero) {
            menorNumero = numero;
        }
    }
    console.log(array, menorNumero, maiorNumero)
    let segundoMenorNumero = 0;
    let segundoMaiorNumero = Infinity;
    for (let numero of array) {
        if (numero !== maiorNumero) {
            if (numero < segundoMaiorNumero) {
                segundoMaiorNumero = numero
            }
        }
        if (numero !== menorNumero) {
            if (numero > segundoMenorNumero) {
                segundoMenorNumero = numero;
            }
        }
    }
    console.log(array, segundoMenorNumero, segundoMaiorNumero)


}
let array = []
for (i = 0; i < 21; i++) {
    array.push(Math.floor(Math.random() * 100))
}
funcaoArray(array)*/

/************ EXERCÍCIO 2 ************

let alerta = function () {
    window.alert("Hello Future4")
    return alerta
}
alerta()
*/

/*___________E X E R C Í C I O S - O B J E T O S______________________________*/

/************ EXERCÍCIO 1 ************
As arrays são semelhantes as listas, armazenam itens (seja objeto, variavel,
numero etc) que podem ser acessados pela seguinte sintaxe: nomeDaArray[i], sendo 
i um numero inteiro que representa a posição do item dentro da array; pode ser
utilizada quando queremos agrupar dados que possuem classificação/tipo semelhante,
como por exemplo: animais=["urso", "sapo", "vira lata caramelo"].
Os objetos são como blocos de dados que juntos formam uma informação, pode possuir 
classe, atributos e métodos. Os atributos são identificados com uma chave e um 
valor. Os objetos se diferem das arrays quando observamos o agrupamento dos dados,
os itens de uma array não tem relações diretas (exceto as posições), já nos objetos,
cada atributo faz parte do objeto e depende da sua existência para fazer sentido 
como informação. Podem ser usados quando os dados devem ser agrupados e ligados a 
uma entidade, exemplo: classe: pessoas, objeto: Melissa{nome: Melissa TM, idade:21}.
*/

/************ EXERCÍCIO 2 ************
function criarRetangulo(base, altura){
    let retangulo = {
        largura: (base),
        altura: (altura),
        perimetro: (base+altura)*2,
        area: (base*altura)
    }
    console.log(retangulo)
}
criarRetangulo(4, 5)
*/