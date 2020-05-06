export class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;
    

    constructor(name: string="", age: number = 0, email: string = "", bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
        
    }

    about(): void {
        console.log( `Name: ${this.name}, Age:${this.age}, Email:${this.email} MyBFF?: ${this.bff ? "Yes" : "No"}. `);
    }
}