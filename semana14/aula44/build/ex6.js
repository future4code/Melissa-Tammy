var estacao;
(function (estacao) {
    estacao["INVERNO"] = "INVERNO";
    estacao["VERAO"] = "VERAO";
    estacao["INTIMA"] = "INTIMA";
    estacao["BANHO"] = "BANHO";
})(estacao || (estacao = {}));
const brusinha = {
    nome: "brusinha",
    preco: 20,
    est: estacao.VERAO
};
const saia = {
    nome: "saia",
    preco: 30,
    est: estacao.INTIMA
};
const calca = {
    nome: "calca",
    preco: 50,
    est: estacao.INVERNO
};
const tenis = {
    nome: "tênis",
    preco: 100,
    est: estacao.BANHO
};
const mascara = {
    nome: "mascara",
    preco: 150,
    est: estacao.INVERNO
};
const vestido = {
    nome: "vestido",
    preco: 200,
    est: estacao.VERAO
};
const meia = {
    nome: "meia",
    preco: 20,
    est: estacao.BANHO
};
const chapeu = {
    nome: "chapeu",
    preco: 70,
    est: estacao.INTIMA
};
const bota = {
    nome: "bota",
    preco: 300,
    est: estacao.VERAO
};
const tops = {
    nome: "top",
    preco: 2000,
    est: estacao.VERAO
};
const arrayRoupinhas = [tops, bota, meia, calca, chapeu, vestido, brusinha, mascara, tenis, saia];
function imprimeArray(array) {
    let arrayImpresso = array.map((roup) => {
        let desconto = roup.preco;
        switch (roup.est) {
            case estacao.INVERNO:
                desconto *= (0.1 - 0.010);
                break;
            case estacao.VERAO:
                desconto *= (0.1 - 0.005);
                break;
            case estacao.INTIMA:
                desconto *= (0.1 - 0.007);
                break;
            case estacao.BANHO:
                desconto *= (0.1 - 0.004);
                break;
        }
        console.log("Nome: ", roup.nome, "\nClassificação: ", roup.est, "\nPreço: R$", roup.preco, "\nPreço c/ desconto: R$", desconto, "\n");
        return (`Nome:  ${roup.nome}; Classificação:  ${roup.est}; Preço: R$ ${roup.preco}; Preço c/ desconto: R$${desconto}`);
    });
    console.log(arrayImpresso);
}
imprimeArray(arrayRoupinhas);
//# sourceMappingURL=ex6.js.map