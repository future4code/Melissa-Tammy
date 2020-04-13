let novaDespesaNoExtrato = document.getElementById("container-extrato")
let arrayDespesas = []
let total = Number()
function inserirDespesas() {
    let valor = document.getElementById("input-valor").value
    let tipo = document.getElementById("tipoDeDespesa").value
    let descricao = document.getElementById("textAreaDescricao").value
    let auxValor = valor.indexOf(".")
    if ((valor !== "") && (tipo !== "") && (descricao !== "")&&(auxValor === -1)) {
        let despesa = {
            valor: Math.trunc(valor),
            tipo: tipo,
            descricao: descricao
        }
        arrayDespesas.push(despesa)
        let arrayDespesasJson = JSON.stringify(arrayDespesas)
        localStorage.setItem("arrayDespesaJson", arrayDespesasJson)
        total += Number(despesa.valor)
        let arrayDespesasConvertido = JSON.parse(localStorage.getItem("arrayDespesaJson"))
        novaDespesaNoExtrato.innerHTML = ""
        arrayDespesasConvertido.forEach((despesa, index, array) => {
            novaDespesaNoExtrato.innerHTML += `<p>${despesa.valor} - ${despesa.tipo}</p>`
        })
        document.getElementById("resultadoFinal").innerHTML = "<p>" + total + "</p>"
        document.getElementById("input-valor").value = ""
        document.getElementById("tipoDeDespesa").value = ""
        document.getElementById("textAreaDescricao").value = ""
    } else {
        window.alert("dados invalidos")
    }
}

function funcaoFiltrar() {
    let localDespesasDetalhadas = document.getElementById("container-filtro")
    let optionDespesa = document.getElementById("tipoDaDespesa").value
    let arrayDespesasConvertido = JSON.parse(localStorage.getItem("arrayDespesaJson"))
    switch (optionDespesa) {
        case "Todas Despesas":
            localDespesasDetalhadas.innerHTML = ""
            arrayDespesasConvertido.forEach((despesa, index, array) => {
                localDespesasDetalhadas.innerHTML += `<p>${despesa.valor} - ${despesa.descricao} - ${despesa.tipo}</p>`
            })
            break;
        case "Despesas de casa":
            localDespesasDetalhadas.innerHTML = ""
            arrayDespesasConvertido.filter(despesa => {
                if (despesa.tipo === "Despesas de casa") {
                    localDespesasDetalhadas.innerHTML += `<p>${despesa.valor} - ${despesa.descricao} - ${despesa.tipo}</p>`
                }
            })
            break;
        case "Despesas de Alimentacao":
            localDespesasDetalhadas.innerHTML = ""
            arrayDespesasConvertido.filter(despesa => {
                if (despesa.tipo === "Despesas de Alimentacao") {
                    localDespesasDetalhadas.innerHTML += `<p>${despesa.valor} - ${despesa.descricao} - ${despesa.tipo}</p>`
                }
            })
            break;
        case "Despesas de Transporte":
            localDespesasDetalhadas.innerHTML = ""
            arrayDespesasConvertido.filter(despesa => {
                if (despesa.tipo === "Despesas de Transporte") {
                    localDespesasDetalhadas.innerHTML += `<p>${despesa.valor} - ${despesa.descricao} - ${despesa.tipo}</p>`
                }
            })
            break;
    }
}