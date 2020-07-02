export abstract class Person {
    constructor(
        protected id: number,
        protected name: string,
        protected email: string,
        protected birth: string) { }

    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
    public getBirth(): string {
        return this.birth;
    }

}