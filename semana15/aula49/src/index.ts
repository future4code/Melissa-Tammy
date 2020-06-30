import { User } from './user'
import { Customer } from './Customer'
import { Employee } from './Employee'

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
//const myPerson4: Customer = new Customer(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256", "cartão")
const myPerson5: Employee = new Employee(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256", new Date(2020, 11, 1), 1500)
console.log(myPerson5.calculateTotalSalary());


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

/*_______________E X E R C Í C I O 4 _______________
  Linhas 32 a 34 do './user.ts'
*/

/*_______________E X E R C Í C I O 5 _______________
  Linha 36 do './user.ts'
*/

/*_______________E X E R C Í C I O 6 _______________
a. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
  Somente uma vez.
b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
  Todos.
*/

/*_______________E X E R C Í C I O 7 _______________
  Linha 28 a 31 './Employee.ts'
*/