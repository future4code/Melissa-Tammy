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