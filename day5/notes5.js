// // //4.1 left over 
// // //1.sort
// // let fruits = ["banana", "apple", "mango", "cherry", "orange"];
// // fruits.sort();
// // console.log(fruits);
// // //2.sort  with numbers
// // let nums = [5, 10, 1, 100, 25];
// // nums.sort();
// // console.log(nums);//nums are sorted as strings
// // //3.sort scores
// // let scores = [78, 92, 85, 88, 95, 73];
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// // ... 97 more times!
// for (let i = 0; i < 100; i++) {
//  console.log("Hello");
// }
// for (initialization; condition; updation) {
//  // Code to execute repeatedly
// }
// for (let i = 1; i <= 5; i++) {
//  console.log(i);
// }
// // Output: 1, 2, 3, 4, 5
// for (let i = 1; i <= 15; i += 2) {
//  console.log(i);
// }
// // Output: 1, 3, 5, 7, 9, 11, 13, 15
// for (let i = 2; i <= 10; i += 2) {
//  console.log(i);
// }
// // Output: 2, 4, 6, 8, 10
// for (let i = 1; i <= 10; i++) {
//  console.log(`5 × ${i} = ${5 * i}`);
// }
// // Output:
// // 5 × 1 = 5
// // 5 × 2 = 10
// // 5 × 3 = 15
// // ... up to 5 × 10 = 50
// for (let i = 10; i >= 1; i----) {
//  console.log(i);
// }
// console.log("Blast off!");
// // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Blast off!
// for (let i = 1; i <= 5; ) {
//  console.log(i);
//  // i never changes, so i <= 5 is always true
// }
// for (let i = 1; i >= 0; i++) {
//  console.log(i);
//  // i keeps increasing, so i >= 0 is always true
// }
// for (let i = 1; ; i++) {
//  console.log(i);
//  // No condition means "always true"
// }
// // ✓ CORRECT
// for (let i = 1; i <= 5; i++) {
//  console.log(i);
// }
// // Runs 5 times and stops
// // ✓ CORRECT
// for (let i = 10; i >= 0; i----) {
//  console.log(i);
// }
// // Counts down from 10 to 0 and stops
// javascript
// // ❌ INFINITE LOOP
// let count = 0;
// while (count < 5) {
//  console.log(count);
//  // Forgot to increment count!
// }
// // ✓ CORRECT
// let count = 0;
// while (count < 5) {
//  console.log(count);
//  count++; // Now it will stop at 5
// }
// for (let i = 1; i <= outerLimit; i++) {
//  for (let j = 1; j <= innerLimit; j++) {
//  // Inner loop code
//  }
// }
// for (let i = 1; i <= 3; i++) {
//  console.log(`Outer loop: ${i}`);
//  for (let j = 1; j <= 3; j++) {
//  console.log(` Inner loop: ${j}`);
//  }
// }
// // Output:
// // Outer loop: 1
// // Inner loop: 1
// // Inner loop: 2
// // Inner loop: 3
// // Outer loop: 2
// // Inner loop: 1
// // Inner loop: 2
// // Inner loop: 3
// // Outer loop: 3
// // Inner loop: 1
// // Inner loop: 2
// // Inner loop: 3
// for (let i = 1; i <= 5; i++) {
//  let row = "";
//  for (let j = 1; j <= 5; j++) {
//  row += (i * j) + "\t";
//  }
//  console.log(row);
// }
// // Output (formatted as a table):
// // 1 2 3 4 5
// // 2 4 6 8 10
// // 3 6 9 12 15
// // 4 8 12 16 20
// // 5 10 15 20 25
// for (let i = 1; i <= 5; i++) {
//  let pattern = "";
//  for (let j = 1; j <= i; j++) {
//  pattern += "* ";
//  }
//  console.log(pattern);
// }
// // Output:
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// for (let row = 1; row <= 4; row++) {
//  let line = "";
//  for (let col = 1; col <= 4; col++) {
//  line += `(${row},${col}) `;
//  }
//  console.log(line);
// }
// // Output:
// // (1,1) (1,2) (1,3) (1,4)
// // (2,1) (2,2) (2,3) (2,4)
// // (3,1) (3,2) (3,3) (3,4)
// // (4,1) (4,2) (4,3) (4,4
// for (let row = 1; row <= 4; row++) {
//  let line = "";
//  for (let col = 1; col <= 4; col++) {
//  line += `(${row},${col}) `;
//  }
//  console.log(line);
// }
// // Output:
// // (1,1) (1,2) (1,3) (1,4)
// // (2,1) (2,2) (2,3) (2,4)
// // (3,1) (3,2) (3,3) (3,4)
// // (4,1) (4,2) (4,3) (4,4)
// // Initialization (outside the loop)
// let i = 1;
// while (condition) {
//  // Code to execute
//  // Updation (inside the loop)
// //  i++;
// }
// for (let i = 5; i >= 1; i----) {
//  let pattern = "";
//  for (let j = 1; j <= i; j++) {
//  pattern += "* ";
//  }
//  console.log(pattern);
// }
// // Output:
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *
// // Initialization (outside the loop)
// let i = 1;
// while (condition) {
//  // Code to execute
//  // Updation (inside the loop)
//  i++;
// }
// let i = 1;
// while (i <= 5) {
//  console.log(i);
//  i++;
// }
// // Output: 1, 2, 3, 4, 5
//while
let i=1;
while(i<=5){
    console.log(i);
    i++;
}