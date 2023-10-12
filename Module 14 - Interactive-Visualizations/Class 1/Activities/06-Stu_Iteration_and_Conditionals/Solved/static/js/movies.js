// Starting a profit sum
let sum = 0;

// Arrays to hold movies by decade
movies1930s = [];
movies1940s = [];
movies1950s = [];
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];
movies2010s = [];

// For loop to go through all movies
for (let i = 0; i < movies.length; i++) {
  // Variable to hold current movie in loop
  let movie = movies[i]
  // Increment sum variable by amount of profit
  sum += movie.profit

  // Conditional statement to determine array assignment
  if (movie.year < 1940) {
    movies1930s.push(movie);
  } else if (movie.year < 1950) {
    movies1940s.push(movie);
  } else if (movie.year < 1960) {
    movies1950s.push(movie);
  } else if (movie.year < 1970) {
    movies1960s.push(movie);
  } else if (movie.year < 1980) {
    movies1970s.push(movie);
  } else if (movie.year < 1990) {
    movies1980s.push(movie);
  } else if (movie.year < 2000) {
    movies1990s.push(movie);
  } else if (movie.year < 2010) {
    movies2000s.push(movie);
  } else {
    movies2010s.push(movie);
  }
}

// Find the average profit
let avg = sum / movies.length;

// Print results
console.log("---------");
console.log(`${movies1930s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1930s.`);
console.log(`${movies1940s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1940s.`);
console.log(`${movies1950s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1950s.`);
console.log(`${movies1960s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1960s.`);
console.log(`${movies1970s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1970s.`);
console.log(`${movies1980s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1980s.`);
console.log(`${movies1990s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1990s.`);
console.log(`${movies2000s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2000s.`);
console.log(`${movies2010s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2010s.`);
console.log(`The average movie profit (adjusted for inflation) is ${avg}.`);
console.log("---------");
