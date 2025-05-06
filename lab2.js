const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

// Challenge Questions:


// 1. Get the first name of a character whose mass is more than 75.
let massMore75 = characters.find((mass) => {
  return mass.mass > 75;
});

console.log(massMore75.name);
console.log("-----------------------------------------------");

// 2. Get the first eye color of a character shorter than 180.

let firstEye = characters.find((eye) => eye.eye_color && eye.height < 180);

console.log(firstEye);
console.log("-----------------------------------------------");

// 3. Get characters whose height is greater than 150 but less than 210.

let heightCharMore150 = characters.filter(
  (char) => char.height > 150 && char.height < 210
);

console.log(heightCharMore150);
console.log("-----------------------------------------------");

// 4. Get all female characters.

let femaleChar = characters.filter((char) => char.gender == "female");

console.log(femaleChar);
console.log("-----------------------------------------------");

// 5. Get an array of all eye colors only.

let eyeColor = characters.map((char) => char.eye_color);

console.log(eyeColor);
console.log("-----------------------------------------------");

// 6. Get an array of all masses only.

let getAllMass = characters.map((char) => char.mass);

console.log(getAllMass);
console.log("-----------------------------------------------");

// 7. Sort by name alphabetically (A to Z).

let getAllNames = characters.sort((a, b) => a.name.localeCompare(b.name));

console.log(getAllNames);
console.log("-----------------------------------------------");

// 8. Sort by height (low to high).

let sortHeights = characters.sort((a, b) => a.height - b.height);

console.log(sortHeights);
console.log("-----------------------------------------------");

// 9. Does every character have a height greater than 100?

let isHeightMore100 = characters.every((char) => char.height > 100);

console.log(isHeightMore100);
console.log("-----------------------------------------------");

// 10. Is every character lighter than 200?

let lighterChaMore200 = characters.every(char => char.mass > 200)

console.log(lighterChaMore200);
console.log("-----------------------------------------------");

// 11. Is there at least one character with black eyes?

let someBlackEye = characters.some(char => char.eye_color === "black")

console.log(someBlackEye);

// 12. Is there at least one character with a height of exactly 177?

let heightExact177 = characters.some(char => char.height == 177)

console.log(heightExact177);
