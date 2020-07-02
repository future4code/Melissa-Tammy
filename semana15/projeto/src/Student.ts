import { User } from './User'
import * as moment from "moment"

export class Student implements User {
    constructor(
        public hobby: string,
        public id: number,
        public name: string,
        public email: string,
        public birth: moment.Moment
    ) { }
}