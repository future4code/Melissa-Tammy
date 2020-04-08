/*
let cartausuario = []
let cartacpu = []
let pontosusuario = []
let pontoscpu = []
let totalusuario = 0;
let totalcpu = 0;
console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   let carta = comprarCarta(); 
   cartausuario.push(carta.texto)
   pontosusuario.push(carta.valor)
   carta = comprarCarta(); 
   cartausuario.push(carta.texto)
   pontosusuario.push(carta.valor)
   carta = comprarCarta(); 
   cartacpu.push(carta.texto)
   pontoscpu.push(Number(carta.valor))
   carta = comprarCarta(); 
   cartacpu.push(carta.texto)
   pontoscpu.push(Number(carta.valor))
   calcularpontos()
   console.log("Usuário - cartas: " + cartausuario + " - pontuação " + totalusuario);
   console.log("Computador - cartas: " + cartacpu+ " - pontuação " + totalcpu)
   
   if (totalcpu > 21){
      console.log("O usuário ganho!")
   } else if (totalusuario > 21){
      console.log("O computador ganhou!")
   }
   if ((totalcpu !== totalusuario)&&(totalcpu < 22)&& (totalusuario < 22)){
      if (totalusuario > totalcpu){
         console.log("O usuário ganhou!")
      }else {
         console.log("O computador ganhou!")
      }
   } else if (totalcpu == totalusuario){
      console.log("Empate!")
   }


} else {
	console.log("O jogo acabou")
}

function calcularpontos(){
   totalusuario = 0
   totalcpu = 0 
   for(i=0; i<pontosusuario.length; i++){
      totalusuario += pontosusuario[i];
   }
   for(i=0; i<pontoscpu.length; i++){
      totalcpu += pontoscpu[i];
   }
}
*/
