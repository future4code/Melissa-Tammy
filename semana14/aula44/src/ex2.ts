function operacoes(a: number, b: number): void {
    let maiorMenor: number = 0
    if (a > b) {
        maiorMenor = a
    } else {
        maiorMenor = b
    }
    return console.log( "Numeros inseridos: ", a, "e", b,"\na) ", a + b, "\nb) ", a - b, "\nc) ", a * b, "\nd) o maior número é ", maiorMenor)
}
operacoes(2, 5)
