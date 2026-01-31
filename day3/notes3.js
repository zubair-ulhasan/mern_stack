// let x=0;
// if (x>1) {
//  // code executes if condition is true
// }
// let driverAge = 20;
// if (driverAge >= 18) {
//  console.log("Eligible for a license.");
// }
// // Output: Eligible for a license.
// let password = "secure123";
// if(password.length>=8){
//     console.log("strong password")
// }
// //output : strong password
// if (x>=2) {
//  // code if condition1 is true
// } else if (x>=3) {
//  // code if condition2 is true
// } else if (x>=4) {
//  // code if condition3 is true
// }
// let score = 75;
// if (score >= 90) {
//  console.log("Grade: A+");
// } else if (score >= 75) {
//  console.log("Grade: A");
// } else if (score >= 60) {
//  console.log("Grade: B");
// } else if (score >= 33) {
//  console.log("Grade: C");
// }
// // Output: Grade: A
// let speed = 85;
// if (speed > 100) {
//  console.log("Severe speeding - Heavy fine");
// } else if (speed > 80) {
//  console.log("Speeding - Warning");
// } else if (speed > 60) {
//  console.log("Normal speed");
// }
// // Output: Speeding - Warning
// let age = 35;
// if (age >= 60) {
//  console.log("Senior citizen");
// } else if (age >= 18) {
//  console.log("Adult");
// } else if (age >= 13) {
//  console.log("Teenager");
// }
// // Output: Adult
// let num = 50;
// if (num > 10) {
//  console.log("Greater than 10"); // This executes
// } else if (num > 30) {
//  console.log("Greater than 30"); // This is skipped (even though true)
// } else if (num > 40) {
//  console.log("Greater than 40"); // This is also skipped
// }
// // Output: Greater than 10
// if (x>=1) {
//  // code if true
// } else {
//  // code if false
// }
// let age2= 16;
// if (age >= 18) {
//  console.log("You can vote");
// } else {
//  console.log("You cannot vote yet");
// }
// // Output: You cannot vote yet
// let number = 7;
// if (number % 2 === 0) {
//  console.log("Even number");
// } else {
//  console.log("Odd number");
// }
// // Output: Odd number
// let temperature = 15;
// if (temperature > 30) {
//  console.log("Hot");
// } else if (temperature > 20) {
//  console.log("Warm");
// } else if (temperature > 10) {
//  console.log("Cool");
// } else {
//  console.log("Cold");
// }
// // Output: Cool
// let username = "admin";
// let password1 = "1234";
// if (username==="admin" && password==="1234") {
//  console.log("Login successful!");
// } else {
//  console.log("Invalid credentials");
// }
// // Output: Login successful!
// let marks = 85;
// if (marks >= 33) {
//  if (marks >= 80) {
//  console.log("Outstanding");
//  } else {
//  console.log("Pass");
//  }
// } else {
//  console.log("Better luck next time!");
// }
// // Output: Outstanding
// let age3 = 25;
// let isStudent = true;
// if (age < 18) {
//  console.log("Child ticket: $5");
// } else {
//  if (isStudent) {
//  console.log("Student ticket: $8");
//  } else {
//  console.log("Adult ticket: $12");
//  }
// }
// // Output: Student ticket: $8
// let num2 = 15;
// if (num > 0) {
//  if (num % 2 === 0) {
//  console.log("Positive even number");
//  } else {
//  console.log("Positive odd number");
//  }
// } else if (num < 0) {
//  console.log("Negative number");
// } else {
//  console.log("Zero");
// }
// // Output: Positive odd number
// // Avoid this!
// // if (condition1) {
// //  if (condition2) {
// //  if (condition3) {
// //  if (condition4) {
// //  // Too deep!
// //  }
// //  }
// //  }
// // }
// let age4= 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
//  console.log("Can drive");
// } else {
//  console.log("Cannot drive");
// }
// // Output: Can drive
// // Both conditions are true: 25 >= 18 (true) AND hasLicense (true)
// let score2= 85;
// if (score2 >= 80 && score <= 100) {
//  console.log("Grade A");
// }
// // Output: Grade A
// // 85 >= 80 (true) AND 85 <= 100 (true) → Both true
// let username3 = "admin";
// let password3 = "secret";
// if (username === "admin" && password === "secret") {
//  console.log("Access granted");
// } else {
//  console.log("Access denied");
// }
// // Output: Access granted
// let isWeekend = true;
// let isSunny = true;
// if (isWeekend && isSunny) {
//  console.log("Let's go to the beach!");
// }
// // Output: Let's go to the beach!
// let day = "Saturday";
// if (day === "Saturday" || day === "Sunday") {
//  console.log("It's the weekend!");
// }
// // Output: It's the weekend!
// // First condition is true, so result is true
// let age5 = 65;
// if (age < 5 || age > 60) {
//  console.log("Free admission");
// } else {
//  console.log("Regular price");
// }
// // Output: Free admission
// // age > 60 is true (65 > 60)
// let isHoliday = false;
// let isBirthday = true;
// if (isHoliday || isBirthday) {
//  console.log("Day off!");
// }
// // Output: Day off!
// // isBirthday is true
// let isEmergency = true;
// let isVIP = false;
// if (isEmergency || isVIP) {
//  console.log("Priority access");
// }
// // Output: Priority access
// let isLoggedIn = false;
// if (!isLoggedIn) {
//  console.log("Please log in");
// }
// // Output: Please log in
// // !false = true
// let isWeekend2 = false;
// if (!isWeekend) {
//  console.log("Time to work!");
// }
// // Output: Time to work!
// console.log(!(5 > 3)); // false (inverts true)
// console.log(!(10 < 2)); // true (inverts false)
// console.log(!true); // false
// console.log(!false); // true
// let username5 = "";
// if (!username) {
//  console.log("Username is required");
// }
// // Output: Username is required
// // empty string is falsy, !falsy = true
// let agec = 25;
// let isCitizen = true;
// let hasVoted = false;
// if (age >= 18 && isCitizen && !hasVoted) {
//  console.log("Eligible to vote");
// }
// // Output: Eligible to vote
// // age >= 18 (true) AND isCitizen (true) AND !hasVoted (true) = true
// let ages = 70;
// let isStudent2 = false;
// if (age > 60 || isStudent) {
//  console.log("10% discount applies");
// }
// // Output: 10% discount applies
// // age > 60 is true
// let isAdmin = false;
// let isModerator = true;
// let isOwner = false;
// if (isAdmin || isModerator || isOwner) {
//  console.log("Access granted");
// }
// // Output: Access granted
// let temperature2 = 25;
// let isRaining = false;
// if ((temperature > 20 && temperature < 30) && !isRaining) {
//  console.log("Perfect weather for a picnic!");
// }
// // Output: Perfect weather for a picnic!
// let result = true || false && false;
// // Evaluates as: true || (false && false)
// // = true || false
// // = true
// // Use parentheses for clarity
// let clearer = (true || false) && false; // = false
// let username7 = "";
// if (username) {
//  console.log("Welcome, " + username);
// } else {
//  console.log("Please enter a username");
// }
// // Output: Please enter a username
// // Empty string is falsy
// let score3 = 0;
// if (score) {
//  console.log("You have " + score + " points");
// } else {
//  console.log("No points yet");
// }
// // Output: No points yet
// // 0 is falsy
// if ("hello") {
//  console.log("Truthy!"); // This runs
// }
// if (0) {
//  console.log("This won't run"); // 0 is falsy
// }
// if ("") {
//  console.log("This won't run"); // Empty string is falsy
// }
// if ([]) {
//  console.log("Arrays are truthy!"); // This runs
// }
// // Output:
// // Truthy!
// // Arrays are truthy!
// let userInput = prompt("Enter your name:");
// if (userInput) {
//  alert("Hello, " + userInput);
// } else {
//  alert("You didn't enter a name");
// }
// // If user enters nothing or cancels, empty string is falsy
// switch (expression) {
//  case value1:
//  // code if expression === value1
//  break;
//  case value2:
//  // code if expression === value2
//  break;
//  default:
//  // code if no cases match
// }
// let signal = "yellow";
// switch(signal) {
//  case "red":
//  console.log("Stop");
//  break;
//  case "yellow":
//  console.log("Caution");
//  break;
//  case "green":
//  console.log("Go");
//  break;
//  default:
//  console.log("Invalid Signal");
// }
// // Output: Caution
// let day4 = 3;
// switch(day) {
//  case 1:
//  console.log("Monday");
//  break;
//  case 2:
//  console.log("Tuesday");
//  break;
//  case 3:
//  console.log("Wednesday");
//  break;
//  case 4:
//  console.log("Thursday");
//  break;
//  case 5:
//  console.log("Friday");
//  break;
//  default:
//  console.log("Weekend");
// }
// // Output: Wednesday
// let day5 = "Saturday";
// switch(day) {
//  case "Saturday":
//  case "Sunday":
//  console.log("Weekend!");
//  break;
//  case "Monday":
//  case "Tuesday":
//  case "Wednesday":
//  case "Thursday":
//  case "Friday":
//  console.log("Weekday");
//  break;
//  default:
//  console.log("Invalid day");
// }
// // Output: Weekend!
// let grade = "B";
// switch(grade) {
//  case "A":
//  console.log("Excellent work!");
//  break;
//  case "B":
//  console.log("Good job!");
//  break;
//  case "C":
//  console.log("You passed");
//  break;
//  case "D":
//  console.log("Needs improvement");
//  break;
//  case "F":
//  console.log("Failed");
//  break;
//  default:
//  console.log("Invalid grade");
// }
// // Output: Good job!
// let signal = "yellow";
// switch(signal) {
//  case "yellow":
//  console.log("Caution");
//  // Missing break!
//  case "green":
//  console.log("Go");
//  break;
//  default:
//  console.log("Invalid");
// }
// // Output:
// // Caution
// // Go
// // (Falls through to next case!)
// // Better with switch
// let color = "blue";
// switch(color) {
//  case "red": /* ... */
//  case "blue": /* ... */
// }
// // Better with if-else
// let age = 25;
// if (age < 18) { }
// else if (age >= 18 && age < 65) { }
// else { }
// alert("Your message here");
// let score = 95;
// alert(`Your score is ${score}!`);
// // Shows: Your score is 95!
// let ageStr = prompt("Enter your age:");
// let age = Number(ageStr);
// if (age >= 18) {
//  alert("You are an adult");
// } else {
//  alert("You are a minor");
// }
// let temp = Number(prompt("What's the temperature?"));
// if (temp > 30) {
//  alert("It's hot!");
// } else if (temp > 20) {
//  alert("It's warm");
// } else {
//  alert("It's cold");
// }
// let score = Number(prompt("Enter your score:"));
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// } else if (score >= 70) {
//  grade = "C";
// } else {
//  grade = "F";
// }
// alert(`Your grade is: ${grade}`);
// let username = prompt("Enter username:");
// let password = prompt("Enter password:");
// if (username === "admin" && password === "1234") {
//  alert("Login successful!");
// } else {
//  alert("Invalid credentials");
// }
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// alert(`${name} is ${age} years old.`);
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let num3 = Number(prompt("Enter third number:"));
// let largest;
// if (num1 >= num2 && num1 >= num3) {
//  largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//  largest = num2;
// } else {
//  largest = num3;
// }
// alert(`The largest number is: ${largest}`);
// let total = Number(prompt("Enter cart total:"));
// if (total > 100) {
//  let discount = total * 0.2; // 20% off
//  total = total -- discount;
//  alert(`20% discount applied! New total: $${total}`);
// } else if (total > 50) {
//  let discount = total * 0.1; // 10% off
//  total = total -- discount;
//  alert(`10% discount applied! New total: $${total}`);
// } else {
//  alert(`Total: $${total}`);
// }
