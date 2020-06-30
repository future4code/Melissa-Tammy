import { User } from './user'
import { Customer } from './Customer'
type person = {
  name: string
}

function createPerson(name: string): person {
  return { name: name }
}

function createUser(id: string, email: string, name: string, password: string, creditCard: string) {

}

//const myPerson2 = createPerson("Robson");
//const myPerson3: User = new User(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256")
const myPerson4: Customer = new Customer(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256", "cartão")
console.log(myPerson4);


/*_______________E X E R C Í C I O 1 _______________
a. Seria possível imprimir a senha (password) atrelada a essa instância?
  Não, pois não9 há o método get.
b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
  Somente uma vez.
*/

/*_______________E X E R C Í C I O 2 _______________
a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
  Somente uma vez.
b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
  Somente uma vez, pois a classe Customer herda User.
*/

/*_______________E X E R C Í C I O 3 _______________
a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
  Não, pois não exite um método get.
*/