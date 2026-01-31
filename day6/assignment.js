// // Create an object called car with the following properties:
// // brand: "Tesla"
// // model: "Model 3"
// // year: 2024
// // color: "white"
// let car2={
//     brand:"tesla",
//     model:"Model 3",
//     year:2024,
//     color:'white'
// }
// console.log(car2.brand,car2["year"]);

// //modifying objects
// let student = {
//     name:"John",
//     age:20,
//     city:"New York"
// }
// student.name = "mohd";
// student.weight = "50";
// delete student.city;
// console.log(student)

// //
// let product = {
//     name:"laptop",
//     price:50000
// }
// product.price = 45000;
// product.instock = "true";
// console.log(product);

// //nested objects
// let classroom = {
//  teacher: { name: "Ms. Smith", subject: "Math" },
//  student1: { name: "Alice", grade: "A" },
//  student2: { name: "Bob", grade: "B+" }
// };
// console.log(classroom.teacher.name)

// //array of objects
// let student2 =[
// {name: "Emma", age: 20, grade: "A"},
// {name: "Liam", age: 21, grade: "B"},
// {name: "Olivia", age: 19, grade: "A+"},
// ];
// //first 
// console.log(student2[0].name)
// console.log(student2.length)

// //random more practise
// let foods = ["Pizza", "Burger", "Pasta", "Sushi"];
// let randomIndex = Math.floor(Math.random()*foods.length);
// console.log(foods[randomIndex]);

// //objects and random
// let players = [
//  { name: "Alice", score: 0 },
//  { name: "Bob", score: 0 },
//  { name: "Charlie", score: 0 }
// ];
// players[0].score = Math.floor(Math.random()*6);
// console.log(players[0].score)
// players[1].score = Math.floor(Math.random()*6);
// console.log(players[1].score)
// players[2].score = Math.floor(Math.random()*6);
// console.log(players[2].score)

// //2
let products = [
 { name: "Phone", price: 20000, discount: 0 },
 { name: "Laptop", price: 50000, discount: 0 }
];
//Generate a random discount between 5 and 20 for the Phone
let randomDisc = Math.floor(Math.random()*16)+5;
products[0].discount = randomDisc;
console.log(products[0].discount);

// Generate a random discount between 5 and 20 for the Laptop

// Print both products with their discount percentages

//students database with array of objects
let students = [
 { name: "Emma", math: 0, science: 0 },
 { name: "Liam", math: 0, science: 0 },
 { name: "Olivia", math: 0, science: 0 }
];
students.forEach(element => {
    element.math = Math.floor(Math.random()*(100-60+1))+60;
    element.science = Math.floor(Math.random()*(100-60+1))+60;
});
console.log(students);

//  Create a lottery system:
// Create an array tickets = []
// Generate and push 5 random ticket numbers (1000 to 9999) into the array
// Print all ticket numbers
// Generate one winning number (1000 to 9999) and print it
let tickets = [];
// tickets.forEach(element => {
//     element=Math.floor(Math.random()*(9999-1000+1))+1000;
// });
for(let i=0;i<5;i++){
    tickets[i]=Math.floor(Math.random()*(9999-1000+1))+1000;
}
console.log(tickets);
