let novaDespesaNoExtrato = document.getElementById("container-extrato")
let arrayDespesas = []
let total = Number()

function inserirDespesas() {
    const valor = document.getElementById("input-valor").value
    const tipo = document.getElementById("tipoDeDespesa").value
    const descricao = document.getElementById("textAreaDescricao").value
    const despesa = {
        valor: Math.trunc(valor),
        tipo: tipo,
        descricao: descricao
    }
    arrayDespesas.push(despesa)
    novaDespesaNoExtrato.innerHTML += "<p> R$" + despesa.valor+ " - " + despesa.tipo + "</p>"
    total += Number(despesa.valor)
    document.getElementById("resultadoFinal").innerHTML = "<p>"+total+"</p>" 
    const apenasCasa = arrayDespesas.filter((tipoDespesa, index, array) => {
        if(tipoDespesa.tipo === "Despesas de casa"){
            document.getElementById("container-filtro").innerHTML = "<p>"+ arrayDespesas  +"</p>"
        }
    })
}

// const apenasCasa = arrayDespesas.filter((tipoDespesa, index, array) => {
//     if(tipoDespesa.tipo === "Despesas de casa"){
//         document.getElementById("container-filtro").innerHTML = "<p>"+ arrayDespesas[index].  +"</p>"
//     }
// })