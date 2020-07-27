import { User } from './User'
import moment from "moment"

export class Student implements User {
    constructor(
        public hobby: string,
        public id: number,
        public name: string,
        public email: string,
        public birth: moment.Moment
    ) { }
}