import {Teacher} from './Teacher'
import {Student} from './Student'

export class Class {
    protected id: number;
    protected name: string; 
    protected startDate: Date;
    protected endDate: Date;
    protected listTeachers: Teacher[]; 
    protected listStudent: Student[];
    protected module: number;

    constructor(newId:number, newName:string, startDate: Date, newEndDate: Date, newListTeachers: Teacher[], newListStudent: Student[], newModule: number) {
        this.id = newId
        this.name = newName
        this.startDate = startDate
        this.endDate = newEndDate
        this.listTeachers = newListTeachers
        this.listStudent = newListStudent
        this.module = newModule
    }

    public getName(): string {
        return this.name;
    }
    public getStartDate(): Date {
        return this.startDate;
    }
    public getEndDate(): Date {
        return this.endDate;
    }
    public getListTeachers(): Teacher[] {
        return this.listTeachers;
    }
    public getListStudent(): Student[] {
        return this.listStudent;
    }
    public getModule(): number {
        return this.module;
    }

}