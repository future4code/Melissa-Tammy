import {Client} from './Client'
import {Place}  from './Place'

type person = {
  name: string
}

function createPerson(name: string): person {
	return {name: name} 
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

const novoLugar: Place = new Place("45844548")

console.log(novoLugar);

/*____________EXERCÍCIO 1____________
a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
  Todas, pois não há encapsulamento.
*/
