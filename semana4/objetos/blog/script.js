let novoPost = document.getElementById("post-container")
let arrayPost = [];
function funcaoPostar(){
    let novopost = {
        titulo: document.getElementById("inputTitulo").value,
        texto: document.getElementById("inputTexto").value
    }
    arrayPost.push(novopost)
    novoPost.innerHTML += "<article id='post'>"+"\n"+"<div id='titulo'>"+novopost.titulo+"</div>" + "\n" +"<div id='paragrafo'>" + novopost.texto + "</div>" + "\n" + "</article>"
    document.getElementById("inputTitulo").value = ""
    document.getElementById("inputTexto").value = ""
}




