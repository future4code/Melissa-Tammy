import { Client } from './Client'
import { Place } from './Place'

type person = {
  name: string
}

function createPerson(name: string): person {
  return { name: name }
}

//const myPerson2 = createPerson("Robson");
/*const myPerson3: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}*/

//const novoLugar: Place = new Place("45844548")

//console.log(novoLugar);

/*____________EXERCÍCIO 1____________
a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
  Todas, pois não há encapsulamento.
*/

/*____________EXERCÍCIO 2____________
a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?
  "Cannot create an instance of an abstract class."
b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
 Criar uma classe que receba essa classe abstrata.
*/

/*____________EXERCÍCIO 3____________
1. O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)
 Criar uma classe que receba essa classe abstrata.
2. Por que a `Place` não é uma interface?
  Porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
3. Por que a classe `Place` é uma Classe Abstrata?
  Porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.
*/