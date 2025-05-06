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

// 4. احصل على الأفلام التي تم إصدارها قبل عام 2010.
// 5. احصل على مصفوفة تحتوي فقط عناوين الأفلام.
// 6. احصل على متوسط تقييم جميع الأفلام.
// 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).
// 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).
// 9. هل جميع الأفلام تقييمها أعلى من 8؟
// 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟
// 11. هل جميع الأفلام أخرجها نفس المخرج؟
// 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟

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
