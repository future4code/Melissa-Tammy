import { Person } from './Person'

export class Student extends Person {
    constructor(
        protected hobby: string,
        id: number,
        name: string,
        email: string,
        birth: string
    ) {
        super(id, name, email, birth);
    }

    public getHobby(): string {
        return this.hobby
    }
}