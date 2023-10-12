let heroines = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

// Create an array of just the names from the heroines array
let names = heroines.map(function(heroine) {
return heroine.name;
});
console.log("Names:", names);

// Create an array of strings for each heroine's name, follow by a colon, followed by their age
let namesAndAges = heroines.map(function(heroine) {
return `${heroine.name}: ${heroine.age}`;
});
console.log("Names and Ages:", namesAndAges);

// Create the same array of strings but with a single line arrow function.
let namesAndAgesArrow = heroines.map(heroine => `${heroine.name}: ${heroine.age}`);

console.log("Names and Ages:", namesAndAgesArrow);

