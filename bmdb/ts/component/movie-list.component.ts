import { Movie } from "../model/movie.class";


export class MovieListComponent {

}

let m1: Movie = new Movie();
m1.id = 1;
m1.title = "Star Wars Episode IV: A New Hope";
m1.year = 1977;
m1.rating = "PG";
m1.director = "George Lucas";
console.log(m1.about());

let m2: Movie = new Movie(2, "The Big Lebowski", 1998, "R","Joel and Ethan Coen");
console.log(m2.about());



