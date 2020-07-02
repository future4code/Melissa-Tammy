import * as moment from "moment"

export interface User {
    id: number;
    name: string;
    email: string;
    birth: moment.Moment;
}