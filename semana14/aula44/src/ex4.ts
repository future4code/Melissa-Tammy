type post = {
    autor: string,
    texto: string
}

let array: post[] = []

const sentimentoDoMundo: post = {
    autor: "Carlos Drummond de Andrade",
    texto: "Tenho apenas duas mãos e o sentimento do mundo."
}
array.push(sentimentoDoMundo)

const memoria: post = {
    autor: "Carlos Drummond de Andrade",
    texto: "Mas as coisas findas\nmuito mais que lindas,\nessas ficarão."
}
array.push(memoria)

const seteFaces: post = {
    autor: "Carlos Drummond de Andrade",
    texto: "Mundo mundo vasto mundo,\nse eu me chamasse Raimundo\nseria uma rima, não seria uma solução."
}
array.push(seteFaces)

const saudade: post = {
    autor: "Neymar Jr.",
    texto: "Saudades do que a gente não viveu ainda."
}
array.push(saudade)

const refri: post = {
    autor: "Neymar Jr.",
    texto: "To chegando com os refrii\nRapaziada!"
}
array.push(refri)

function filtroAutor(arr: post[], aut: string) {
    arr.filter((item: post) =>{
        if (item.autor === aut){
            return console.log("'", item.texto, "'", "\n")
        }
    })
}


console.log("a) Exercício de código. Linhas 1 a 36. \nb)Poeta de rede social, Neymar Jr., publicou as seguintes obras: ")
filtroAutor(array, "Neymar Jr.")
console.log("\nTrechos de Drummond:") 
filtroAutor(array, "Carlos Drummond de Andrade")