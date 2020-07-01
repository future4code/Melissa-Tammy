import { User } from './user'
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

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
//const myPerson5: Employee = new Employee(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256", new Date(2020, 11, 1), 1500)
const myPerson6: Seller = new Seller(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256", new Date(2020, 11, 1), 1500)

myPerson6.setSalesQuantity(2)
console.log(myPerson6.calculateTotalSalary());





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
  './user.ts'
*/

/*_______________E X E R C Í C I O 5 _______________
  './user.ts'
*/

/*_______________E X E R C Í C I O 6 _______________
a. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
  Somente uma vez.
b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
  Todos.
*/

/*_______________E X E R C Í C I O 7 _______________
  './Employee.ts'
*/

/*_______________E X E R C Í C I O 8 _______________
  a. Crie uma instância da classe Seller. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?
    os mesmos parâmetros de Employee/User
  b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?
    Todos exceto Password, pois não há o metodo get.
*/

/*_______________E X E R C Í C I O 9 _______________
a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
  Sim, pois há o metodo get
*/

/*_______________E X E R C Í C I O 10 _______________
a. Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?
  Apenas o valor baseSalary + 400, pois salesQuantity é private e não consegue ser acessada.
*/

/*_______________E X E R C Í C I O 11 _______________
  './Employee.ts' './Seller.ts'
*/