import { Movie } from "../model/movie.class";
import { MovieService } from "../service/movie.service";


export class MovieListComponent {

}
let readline = require('readline-sync');
let movieSvc: MovieService = new MovieService();
let m1: Movie = new Movie();
m1.id = 1;
m1.title = "Star Wars Episode IV: A New Hope";
m1.year = 1977;
m1.rating = "PG";
m1.director = "George Lucas";
let m2: Movie = new Movie(2, "The Big Lebowski", 1998, "R", "Joel and Ethan Coen");
movieSvc.add(m1);
movieSvc.add(m2);

console.log("Welcome to BMDB Typescript!");
console.log("---------------------------");

let command: string = "";
while (command != "exit") {
    console.log("COMMAND MENU: ");
    console.log("--------------");
    console.log("list   - list all movies");
    console.log("get    - get a movie");
    console.log("add    - list a movie");
    console.log("delete - delete a movie");
    console.log("exit   - exit app");
    command = readline.question("Command?: ");

    switch (command) {
        case "list":
            console.log("Movie List: ")
            console.log("---------------");
            movieSvc.list().forEach(movie => {
                console.log(movie.about());
            });
            break;
        case "get":
            console.log("Get a movie by ID: ")
            console.log("--------------------");
            let id: number = readline.questionInt("Movie ID?: ");
            let movie: Movie = movieSvc.get(id);
            console.log(movie.about());
            break;
        case "add":
            console.log("Add a movie: ")
            console.log("---------------");
            id = readline.guestionInt("ID?: ")
            let title: string = readline.question("Title?: ");
            let year: number = readline.questionInt("Year?: ");
            let rating: string = readline.question("Rating?: ");
            let director: string = readline.question("Director?: ");
            movie = new Movie(id, title, year, rating, director);
            movieSvc.add(movie);
            break;
        case "delete":
            console.log("Delete a Movie from the List: ")
            console.log("-------------------------------");
            id = readline.questionInt("ID?: ")
            movieSvc.delete(id);
            console.log("Movie deleted!");
            break;
        case "exit":
            break;
        default:
            console.log("Invalid command. try again");
            break;
    }
}
