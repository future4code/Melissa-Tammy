let segunda = document.getElementById("segundaTarefa")
let terca = document.getElementById("tercaTarefa")
let quarta = document.getElementById("quartaTarefa")
let quinta = document.getElementById("quintaTarefa")
let sexta = document.getElementById("sextaTarefa")
let sabado = document.getElementById("sabadoTarefa")
let domingo = document.getElementById("DomingoTarefa")
let tarefaInput = ""
let diaTarefa = 0

function criar(tarefaInput) {
    diaTarefa = Number(document.getElementById("dia").value)
    console.log(diaTarefa)
    switch (diaTarefa) {
        case 2:
            criarSegunda()
            break;
        case 3:
            criarTerca()
            break;
        case 4:
            criarQuarta()
            break;
        case 5:
            criarQuinta()
            break;
        case 6:
            criarSexta()
            break;
        case 7:
            criarSabado()
            break;
        case 1:
            criarDomingo()
            break;
    }
    document.getElementById("tarefaInput").value = ""
    
}

function criarSegunda(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    segunda.innerHTML += "<p>" + tarefaInput + "</p>"
}
function criarTerca(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    terca.innerHTML += "<p>" + tarefaInput + "</p>"
} function criarQuarta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    quarta.innerHTML += "<p>" + tarefaInput + "</p>"
} function criarQuinta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    quinta.innerHTML += "<p>" + tarefaInput + "</p>"
} function criarSexta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    sexta.innerHTML += "<p>" + tarefaInput + "</p>"
} function criarSabado(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    sabado.innerHTML += "<p>" + tarefaInput + "</p>"
} function criarDomingo(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    domingo.innerHTML += "<p>" + tarefaInput + "</p>"
}
// function (p){
//     p.style.backgroundcolor = #55555;
// }