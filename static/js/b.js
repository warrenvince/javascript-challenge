// Create a variable called "name" that holds a string
// function something(){
//     let name = "Bryan Lowe";
//     const year = 1984;
//     if (fdkjalfdjksalf) {
//         name = "fjdklafa"
//     }
// }
// name = "Tim";
let name = "Bryan Lowe";
// Create a variable called "country" that holds a string
let country = "USA";
// Create a variable called "age" that holds an integer
let age = 35;
// Create a variable called "hourlyWage" that holds an integer
let hourlyWage = 25;
// Calculate the "dailyWage" for the user
let dailyWage = hourlyWage * 8;
// Create a variable that holds a number as a string
let weeklyHours = "40";
// Create a variable called 'weeklyWage' that converts a string into an integer
let weeklyWage = hourlyWage * parseInt(weeklyHours);
// Create a variable called "satisfied" that holds a boolean
let satisfied = true;
// Print out "Hello <name>!"
console.log(`Hello, ${name}`);
// Print out what country the user entered
console.log(`You live in ${country}`);
// Print out the user's age
console.log(`You are ${age} years old.`);
// Print out the daily wage that was calculated
console.log(`You make ${dailyWage} dollars per day`);
// Print out the weekly wage that was calculated
console.log(`You make ${weeklyWage} dollars per week`);
console.log('This is a test ${weeklyWage}');
// Using an IF statement to print out whether the users were satisfied
if (satisfied === true) {
    console.log('You are satisfied with your pay.');
} 
else {
    console.log('You are not satisfied with your pay.');
}