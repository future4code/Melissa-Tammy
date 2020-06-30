import { User } from './user'

type person = {
  name: string
}

function createPerson(name: string): person {
  return { name: name }
}

function createUser(id: string, email: string, name: string, password: string){
  
}

const myPerson2 = createPerson("Robson");
const myPerson3: User = new User(`${Date.now()}`, "mel@gmail.com ", "Mel", "13256")
console.log(myPerson3);