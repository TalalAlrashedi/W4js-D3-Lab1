const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

// 1. احصل على عنوان أول فيلم تم إصداره بعد عام 2000.

let firstMovie = movies.find((movie) => movie.year > 2000);

console.log(firstMovie.title);
console.log("--------------------------");

// 2. احصل على عنوان أول فيلم تقييمه أعلى من 9.

let highRates = movies.find((movie) => movie.rating > 9);

console.log(highRates.title);
console.log("--------------------------");

// 3. احصل على الأفلام التي أخرجها "Christopher Nolan" فقط.

let nolanMovies = movies.filter(
  (movie) => movie.director.toLowerCase() === "christopher nolan"
);
let nolanMoviesTitle = nolanMovies.map((title) => title.title);
console.log("--------------------------");

console.log(nolanMoviesTitle);

console.log("--------------------------");

// 4. احصل على الأفلام التي تم إصدارها قبل عام 2010.

let moviesBefore2010 = movies
  .filter((movie) => movie.year < 2010)
  .map((title) => title.title);

console.log(moviesBefore2010);
console.log("--------------------------");

// 5. احصل على مصفوفة تحتوي فقط عناوين الأفلام.

let onlyTitleMovies = movies.map((title) => title.title);

console.log(onlyTitleMovies);
console.log("--------------------------");

// 6. احصل على متوسط تقييم جميع الأفلام.

let totalRates = movies.reduce((sum, rate) => sum + rate.rating, 0);

let avgRates = totalRates / movies.length;

console.log(avgRates);
console.log("--------------------------");

// 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).

let sortYearMovies = movies.sort((a, b) => a.year - b.year);

console.log(sortYearMovies);
console.log("--------------------------");

// 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).

let sortRates = movies.sort((a, b) => b.rating - a.rating);

console.log(sortRates);
console.log("--------------------------");
// 9. هل جميع الأفلام تقييمها أعلى من 8؟

let everyMovieHigher8 = movies.every((movie) => movie.rating);

console.log(everyMovieHigher8);
console.log("--------------------------");

// 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟

let movieRealse1999 = movies.some((movie) => movie.year == 1999);

console.log(movieRealse1999);

console.log("--------------------------");

// 11. هل جميع الأفلام أخرجها نفس المخرج؟

let sameDirector = movies[0].director;

let allDirector = movies.every((movie) => movie.director == sameDirector);

console.log(allDirector);
console.log("--------------------------");

// 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟

let lessThan8 = movies.some((movie) => movie.rating < 8.5);

console.log(lessThan8);
