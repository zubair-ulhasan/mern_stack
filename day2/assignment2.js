//problem4
let isItRaining=false;
let isTheUserAnAdult=age>=18;
let pwdMatch=false;
//problem6
let lang=["a",'b','c']
console.log(lang[lang.length-1]); 
//template literal
let name3 = "Alice";
let score = 95;
let message = `Student ${name3}  scored score points.`;
//new template literal
let cityName = "Paris";
let temperature = 25;
let weather=`The temperature in ${cityName} is ${temperature} degrees`;
console.log(weather);
//comparisions
let age=18;
if(age>=18){
    console.log(age is greatet than 18);
}else {
    console.log(less than 18);
}
//loose equality vs strict equalty
let userInput = "10";
if (userInput === 10) {
 console.log("Input is 10");
}
//string comparision
console.log('a' > 'A'); // ___lexical____________
console.log('b' < 'c'); // ___word by word____________
console.log('apple' < 'banana'); // __checking_____________
console.log('Z' < 'a'); //asciii values
console.log("10" < "2"); //unicode 
let str1 = "Hello";
let str2 = "HELLO";
if(str1.toLowerCase==str2.toLowerCase){
console.log(equal);}
else{
    console.log(not equal);}
//age checker
let userAge = 16;
let minimumAge = 18;
// Write a comparison to check if user is old enough
let isOldEnough =userAge>=minimumAge;
console.log(isOldEnough); 
//email
let email = "alice@example.com";
// Get the first character
let firstChar=email[0];
// Check if it's a lowercase letter (between 'a' and 'z')
let isValid = firstChar>='a' && firstChar<='z';
console.log(isValid);
//string builder
let productName = "Wireless Mouse";
let productPrice = 29.99;
let inStock = true;
// Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
let description=`
    Product:${productName};
    Price:${productPrice};
    In Stock:${instock};
`
    
;
console.log(description);
//use number function
//25 .password calci
let password = "Pass123";
// Check the following:
// 1. Password length is at least 6 characters
let isLongEnough = password.length>=6;
// 2. First character is uppercase (between 'A' and 'Z')
let startsWithUppercase = password[0]>='A'&& password[0]<='Z';
// 3. Last character is a digit (between '0' and '9')
let last=password.length-1;
let endsWithNumber = password[last]>='0' && password[last]<='9';
console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);