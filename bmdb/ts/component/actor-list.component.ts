import { Actor } from "../model/actor.class";
import { ActorService } from "../service/actor.service";


export class ActorListComponent {

}

let readline = require('readline-sync');
let actorSvc: ActorService = new ActorService();
let a1: Actor = new Actor(1,"Harrison","Ford", "Male","07-13-1942");
let a2: Actor = new Actor(2,"Jeff", "Bridges", "Male", "12-04-1942");
actorSvc.add(a1);
actorSvc.add(a2);

console.log("Welcome to BMDB Typescript!");
console.log("---------------------------");

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU: ");
    console.log("--------------");
    console.log("list   - list all actors");
    console.log("get    - get an actor");
    console.log("add    - list an actor");
    console.log("delete - delete an actor");
    console.log("exit   - exit app");
    command = readline.question("Command?: ");

    switch (command) {
        case "list":
            console.log("Actor List: ")
            console.log("---------------");
            actorSvc.list().forEach(actor => {
                console.log(actor.about());
            });
            break;
        case "get":
            console.log("Get a actor by ID: ")
            console.log("--------------------");
            let id: number = readline.questionInt("Actor ID?: ");
            let actor: Actor = actorSvc.get(id);
            console.log(actor.about());
            break;
        case "add":
            console.log("Add an actor: ")
            console.log("---------------");
            id = readline.guestionInt("ID?: ")
            let firstName: string = readline.question("Forst Name?: ");
            let lastName: string = readline.question("Last Name?: ");
            let gender: string = readline.question("Gender?: ");
            let birthdate: string = readline.question("Birthdate?: ");
            actor = new Actor(id, firstName, lastName, gender, birthdate);
            actorSvc.add(actor);
            break;
        case "delete":
            console.log("Delete a Movie form the List: ")
            console.log("-------------------------------");
            id = readline.questionInt("ID?: ")
            actorSvc.delete(id);
            console.log("Actor deleted!");
            break;
        case "exit":
            break;
        default:
            console.log("Invalid command. try again");
            break;
    }
}