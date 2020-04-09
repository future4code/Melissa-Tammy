let segunda = document.getElementById("segundaTarefa")
let terca = document.getElementById("tercaTarefa")
let quarta = document.getElementById("quartaTarefa")
let quinta = document.getElementById("quintaTarefa")
let sexta = document.getElementById("sextaTarefa")
let sabado = document.getElementById("sabadoTarefa")
let domingo = document.getElementById("domingoTarefa")
let tarefaInput = ""
let diaTarefa = 0

function criar(tarefaInput) {
    diaTarefa = Number(document.getElementById("dia").value)
    tarefaInput = document.getElementById("tarefaInput").value
    if (tarefaInput == "") {
        window.alert("insira uma tarefa")
    } else {
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
            case 8:
                criarDomingo()
                break;
        }
    }
    document.getElementById("tarefaInput").value = ""
}
function validacao(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    if (tarefaInput == "") {
        window.alert("insira uma tarefa")
    }
}
function criarSegunda(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    segunda.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
}
function criarTerca(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    terca.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function criarQuarta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    quarta.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function criarQuinta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    quinta.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function criarSexta(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    sexta.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function criarSabado(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    sabado.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function criarDomingo(tarefaInput) {
    tarefaInput = document.getElementById("tarefaInput").value
    domingo.innerHTML += "<p onclick='riscar(this)'>" + tarefaInput + "</p>"
} 
function riscar(paragrafo) {
    paragrafo.style.textDecoration = "line-through";
}
function limpar(){
    location.reload()
}
let addHora = document.getElementById("hora")
for (let i=1; i<25; i++){
    addHora.innerHTML += "<option value='" + i + "h" + "'>" + i + "h" + "</option>"
}
