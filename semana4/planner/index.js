let segunda = document.getElementById("segundaTarefa")
let tarefaInput = ""
function criar(tarefaInput){
    tarefaInput = document.getElementById("tarefaInput").value
    console.log(tarefaInput)
    segunda.innerHTML += "<p>"+ tarefaInput +"</p>"
}