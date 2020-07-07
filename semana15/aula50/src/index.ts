import { Client } from './Client'
import { Place } from './Place'
import { Industry } from './Industry'
import { Commerce } from './Commerce'
import { Residence } from './Residence'
import { ResidentialClient } from './ResidentialClient'
import {CommercialClient} from './CommercialClient'
import {IndustrialClient} from './IndustrialClient'
import {ClientManager} from './ClientManager'

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

/*____________EXERCÍCIO 4____________
a. Que métodos e propriedades essa classe possui? Por quê?
  Todos do ResidentialClient, Residence e Place.
*/

/*____________EXERCÍCIO 5____________
a. Quais as semelhanças dessa classe com a ResidentialClient?
  Ambos herdam Place e Client.
b. Quais as diferenças dessa classe com a ResidentialClient?
  CNPJ, CPF, residentsQuantity e floorsQuantity. Que são propriedades de Residence e Commerce.
*/

/*____________EXERCÍCIO 6____________
a. De qual classe a `IndustrialClient` deve ser filha? Por quê?
  Industry e CLient, pois herdam as suas propriedades.
b. Que interface a `IndustrialClient` implementa? Por quê?
  Client, pois herda name, registrationNumber, consumedEnergy.
c. Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
  Porque outra classe será responsável por settar os dados.
*/

/*____________EXERCÍCIO 7____________
  ok
*/

/*____________EXERCÍCIO 8____________

const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Melissa", 1111, 100, "1111111", 1, "111111")
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Tammy", 2222, 200, "22222222", 2, "222222")
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Melonio", 3333, 300, "333333", 3, "333333")
clientManager.registerClient(industrialClient)

console.log(clientManager.calculateBillOfClient(1111))
clientManager.deleteUser(1111)
console.log(clientManager)
*/