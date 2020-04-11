/*___________L E I T U R A     D E      C Ó D I G O______________________________*/

/************ EXERCÍCIO 1 ************
A função faz conversão de dolares de acordo com a cotação inserida pelo usuário,
multiplicando a quantidade de dolar pela cotação e retornando o valor em real.
O valor impresso no console tendo 100 como parâmetro da função, será "R$100*
<cotacao inserida pelo usuário>"
*/


/************ EXERCÍCIO 2 ************
A função investeDinheiro retorna a variável valorAposInvestimento, que é o valor 
inserido multiplicado pela porcentagem de rendimento, de acordo com o tipo de 
investimento.

conlose.log(novoMontante) retorna: 165
conlose.log(segundoMontante) retorna: "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
*/

/************ EXERCÍCIO 3 ************
O código insere os números da array numeros nas arrays array1 e array2.
É feita a operação mod 2 de cada item da array numeros, caso o resultado seja 0
quer dizer que o número é par, e é inserido na array1, se for diferente de 0 
significa que é impar, e então é inserido na array2.

Retornos do console:
"Quantidade total de números 14"
6
8
*/

/************ EXERCÍCIO 4 ************
-Teste de mesa-
numero = 25
numero1= 25
numero2= 25
numero= 12
numero1= 12
numero = 55
numero2= 55
numero= 64
numero2= 64
numero= 121
numero2= 121

O código varre a array numeros, inicialmente comparando cada número com 
infinito(numero1) e 0(numero2), caso o item da array seja menor que numero1,
a variavel numero1 recebe o valor da variavel numero; caso seja maior que numero2,
a variável numero2 recebe o valor de numero. Dessa forma, passando por cada item, 
o numero1 assumirá o item de menor valor da array e o numero2 assumirá o de maior
valor.

Retorno do console:
-10
1590
__________________________________________________________________________________
*/

/*___________L Ó G I C A________________________________________________________*/

/************ EXERCÍCIO 1 ************
a) T && F && !(!(!(F))) = T && F && T 
    = F

b) (T && F) || !(!(F))= (F) || (F) 
    = F

c) (F || !(F)) && (!(!(F))) && (!(!(F)) || T) = (T) && (F) && (T) 
    = F

d) !(F && !(F)) || !(T && !(F))= T || F
    = T

e)!(T) && !(!(F)) || ((!(!(!(F))) && !(F) && !(F))= F ||  (T && T && T)
    = T
*/

/************ EXERCÍCIO 2 ************
O código não funciona porque vai entrar em loop com i=0 e travar imprimindo 0,
é necessário colocar um i++ ao final do laço, e retirar o <= e colocar <, para 
imprimir somente os "N primeiros números" positivos multiplicado por 2.

const quantidadeDeNumerosPares = 5
let i = 0
while (i < quantidadeDeNumerosPares) {
    console.log(i * 2)
    i++
}
*/

