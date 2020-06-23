enum estacao {
    INVERNO = "INVERNO",
    VERAO = "VERAO",
    INTIMA = "INTIMA",
    BANHO = "BANHO"
}
type roupa = {
    nome: string,
    preco: number,
    est: estacao
}
const brusinha: roupa = {
    nome: "brusinha",
    preco: 20,
    est: estacao.VERAO
}
const saia: roupa = {
    nome: "saia",
    preco: 30,
    est: estacao.INTIMA
}
const calca: roupa = {
    nome: "calca",
    preco: 50,
    est: estacao.INVERNO
}
const tenis: roupa = {
    nome: "tênis",
    preco: 100,
    est: estacao.BANHO
}
const mascara: roupa = {
    nome: "mascara",
    preco: 150,
    est: estacao.INVERNO
}
const vestido: roupa = {
    nome: "vestido",
    preco: 200,
    est: estacao.VERAO
}
const meia: roupa = {
    nome: "meia",
    preco: 20,
    est: estacao.BANHO
}
const chapeu: roupa = {
    nome: "chapeu",
    preco: 70,
    est: estacao.INTIMA
}
const bota: roupa = {
    nome: "bota",
    preco: 300,
    est: estacao.VERAO
}
const tops: roupa = {
    nome: "top",
    preco: 2000,
    est: estacao.VERAO
}

const arrayRoupinhas: roupa[] = [tops, bota, meia, calca, chapeu, vestido, brusinha, mascara, tenis, saia]

function imprimeArray(array: roupa[]): void {
    let arrayImpresso: any[] = array.map((roup) => {
        let desconto: number = roup.preco
        switch (roup.est) {
            case estacao.INVERNO:
                desconto *= (0.1-0.010)
                break;
            case estacao.VERAO:
                desconto *= (0.1-0.005)
                break;
            case estacao.INTIMA:
                desconto *= (0.1-0.007)
                break;
            case estacao.BANHO:
                desconto *= (0.1-0.004)
                break;
        }
        console.log("Nome: ", roup.nome, "\nClassificação: ", roup.est, "\nPreço: R$", roup.preco, "\nPreço c/ desconto: R$", desconto, "\n")
        return (`Nome:  ${roup.nome}; Classificação:  ${roup.est}; Preço: R$ ${roup.preco}; Preço c/ desconto: R$${desconto}`)
    })
    console.log(arrayImpresso)
}

imprimeArray(arrayRoupinhas)