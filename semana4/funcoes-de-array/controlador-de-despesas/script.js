let novaDespesaNoExtrato = document.getElementById("container-extrato")
let arrayDespesas = []
function inserirDespesas() {
    const valor = document.getElementById("input-valor").value
    const tipo = document.getElementById("tipoDeDespesa").value
    const descricao = document.getElementById("textAreaDescricao").value
    const despesa = {
        valor: valor,
        tipo: tipo,
        descricao: descricao
    }
    arrayDespesas.push(despesa)
}
console.log(arrayDespesas)

for (i = 0; i < arrayDespesas.length; i++) {
    novaDespesaNoExtrato.innerHTML += "<p>" + "oi" + "</p>"
}
