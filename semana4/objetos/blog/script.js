let localDoPost = document.getElementById("post-container")
let arrayPost = [];
arrayPost[0] = {
    titulo: "Dispersão",
    texto: "Perdi-me dentro de mim Porque eu era labirinto, E hoje, quando me sinto, É com saudades de mim. Passei pela minha vida Um astro doido a sonhar. Na ânsia de ultrapassar, Nem dei pela minha vida... Para mim é sempre ontem, Não tenho amanhã nem hoje: O tempo que aos outros foge Cai sobre mim feito ontem. (...)",
    autor: "Mário de Sá-Carneiro"
}

function funcaoPostar() {
    let novopost = {
        titulo: document.getElementById("inputTitulo").value,
        texto: document.getElementById("inputTexto").value,
        autor: document.getElementById("inputAutor").value
    }
    console.log(novopost)
    arrayPost.push(novopost)
    let arrayString = JSON.stringify(arrayPost);
    console.log(arrayString)
    console.log(arrayPost)
    localStorage.setItem("arrayString", arrayString)
    console.log(localStorage.getItem("arrayString"))
}

function atualizarFeed() {
    localDoPost.innerHTML = ""
    let arrayConvertida = JSON.parse(localStorage.getItem("arrayString"))
    console.log(arrayConvertida)
    arrayConvertida.forEach((post, index, array) => {
        console.log(post)
        localDoPost.innerHTML += `<article id='post'><h3>${post.titulo}</h3><p>${post.texto}</p><p class='autor'>-${post.autor}</p></article>`
    })
}

