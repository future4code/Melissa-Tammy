let addHora = document.getElementById("hora");
let horario = "";
for (let i = 1; i < 25; i++) {
    horario = i + "h"
    addHora.innerHTML += `<option value='${horario}'> ${horario}  </option>`
}
function criarTarefa() {
    let horas = document.getElementById("hora").value;
    let textoTarefa = document.getElementById("tarefaInput").value;
    let diaSemana = document.getElementById("dia").value;
    if (textoTarefa !== ""){
        document.getElementById(diaSemana).innerHTML += `<p onclick='riscar(this)'> ${horas} - ${textoTarefa} </p>`
    document.getElementById("tarefaInput").value = ""
    } else {
        window.alert("Insira uma tarefa")
    }

}
function riscar(paragrafo) {
    paragrafo.style.textDecoration = "line-through";
}
function limpar() {
    location.reload()
}

