let cartausuario = []
let cartacpu = []
let pontosusuario = []
let pontoscpu = []
let totalusuario = Number;
let totalcpu = Number;
console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   primeira_rodada();
   continuar();
   if (totalusuario < 21){
      while ((totalcpu < totalusuario)&&(!(totalcpu == totalusuario))){
         compracpu();
      }
   }
   console.log("Usuário - cartas: " + cartausuario + " - pontuação " + totalusuario);
   console.log("Computador - cartas: " + cartacpu+ " - pontuação " + totalcpu)
   resultado();
} else {
   console.log("O jogo acabou")
}
function primeira_rodada() {
   let carta = comprarCarta();
   cartausuario.push(carta.texto)
   pontosusuario.push(carta.valor)
   carta = comprarCarta();
   cartausuario.push(carta.texto)
   pontosusuario.push(carta.valor)
   carta = comprarCarta();
   cartacpu.push(carta.texto)
   pontoscpu.push(carta.valor)
   carta = comprarCarta();
   cartacpu.push(carta.texto)
   pontoscpu.push(carta.valor)
   calcularpontos()
   if ((totalusuario == 22) || (totalcpu == 22)) {
      alert("As cartas serão sorteadas novamente")
      primeira_rodada();
   }
}
function compracpu(){
   carta = comprarCarta();
   cartacpu.push(carta.texto)
   pontoscpu.push(carta.valor)
   calcularpontos();
   console.log("cpu comprou cartas")
}
function maiscarta() {
   carta = comprarCarta();
   cartausuario.push(carta.texto)
   pontosusuario.push(carta.valor)
   calcularpontos();
   console.log("usuário comprou cartas")
}
function continuar() {
   if (confirm("Suas cartas são " + cartausuario + ". A carta revelada do computador é " + cartacpu[0] + "\n" + "Deseja comprar mais uma carta?")) {
      maiscarta();
      if (totalusuario < 22) {
         continuar();
      } else {
         alert("Suas cartas são " + cartausuario + ". Sua pontuação é " + totalusuario+ "." + "\n" + "As cartas do computador são " + cartacpu + ". A pontuação do computador é "+ totalcpu +"."+ "\n" + "O computador ganhou!")
      }
   }
}
function calcularpontos() {
   totalusuario = 0
   totalcpu = 0
   for (i = 0; i < pontosusuario.length; i++) {
      totalusuario += pontosusuario[i];
   }
   for (i = 0; i < pontoscpu.length; i++) {
      totalcpu += pontoscpu[i];
   }
}


function resultado() {
   let textresult = ("Total: Usuário " + totalusuario + " X " +"Computador " + totalcpu + "\n" + "Cartas do usuário: " + cartausuario + "\n" + "Cartas do Computador: " + cartacpu);
   if (totalcpu > 21) {
      alert("O usuário ganho!" + "\n" + textresult)
   } else if (totalusuario > 21) {
      alert("O computador ganhou!" + "\n" + textresult)
   }
   if ((totalcpu !== totalusuario) && (totalcpu < 22) && (totalusuario < 22)) {
      if (totalusuario > totalcpu) {
         alert("O usuário ganhou!" + "\n" + textresult)
      } else {
         alert("O computador ganhou!" + "\n" + textresult)
      }
   } else if (totalcpu == totalusuario) {
      alert("Empate!" + "\n" + textresult)
   } 
}