import { User } from './User'
import * as moment from "moment"

export class Teacher implements User {
    constructor(
        public expertise: TEACHER_SPECIALTY[],
        public id: number,
        public name: string,
        public email: string,
        public birth: moment.Moment
    ) {
    }
}

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"
  }