import { Person } from './Person'

export class Teacher extends Person {
    constructor(
        protected expertise: EXPERTISE,
        id: number,
        name: string,
        email: string,
        birth: string
    ) {
        super(id, name, email, birth);
    }

    public getExpertise(): string {
        return this.expertise
    }

}

export enum EXPERTISE {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"
  }