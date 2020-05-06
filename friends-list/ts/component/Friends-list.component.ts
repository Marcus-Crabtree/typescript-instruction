import { Friend } from "../model/friend.class";


export class ListComponent {

}

let f1: Friend = new Friend("Geoff",34,"Geoff@email.com",true);
let f2: Friend = new Friend("Dave",32,"Dave@email.com",true);
let f3: Friend = new Friend("Mike",36,"Mike@email.com",false);
let f4: Friend = new Friend("Suzi",29,"suzi@email.com",false);
let f5: Friend = new Friend("Aaron",43,"AyAyRon@email.com",true);
let friends: Friend[]= [f1,f2,f3,f4,f5];




for (let friend of friends){
    console.log(friend.about());
}








