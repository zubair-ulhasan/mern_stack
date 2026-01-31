let num = -5;
if (num>0){
    console.log("positive");}
else if(num=0){
    console.log("zero");
}
else{console.log("negetive");}
//license
let age = 17;
if(age>=18){
    console.log("eligible for vote");
}
else{
    console.log("not eligible");
}
//grade
let marks = 85;
if(marks>=90){
    console.log("grade A");
}
else if(marks>=80 && marks<=89){
    console.log("grade b")
}
else if(marks>=70 && marks<=79){
    console.log("grade c")
}
else if(marks>=60 && marks<=69){
    console.log("grade d")
}
else {
    console.log("grade f")
}
//operators
let username = "admin";
let password = "12345";
if(username==="admin" && password==="12345"){
    console.log("valid");
}
else{
    console.log("invalid");
}
//weekend or weekday
let day = "Monday";
switch(day){
    case "Monday"||"Tuesday"||"Wednesday"||"Thursday"||"Friday":
        console.log("weekday")
        break;
    case "Saturday"||"Sunday":
        console.log("weekend");
        break;    
}
//ticket
//let age = 25;
if(age<12){
    console.log("$5");
}
else if(age >= 12 && age<=60){
    console.log("$8");
}
else if(age>60 ){
    console.log("$6");
}
//free shipping
let orderTotal = 40;
let isPremium = true;
if(orderTotal>50 || isPremium){
    console.log("free shipping")
}else{
    console.log("no free")
}
//nested
let marks1=75;
if(marks1>=33){
    if(marks1>=80){
        console.log("Pass with distinction");
    }
    else{
        console.log("pass");
    }
}
else{
    console.log("fail");
}
//temp
let temp = 18;
let isRaining = false;
if(temp>30){
    console.log("hot day");
}
else if(temp>20 && temp<30){
    if(isRaining){
    console.log("Pleasant but rainy")
}
else{
    console.log("perfect weather");
}
}
else{
    console.log("cold day")
}
//takes user input 
let a= prompt("enter day number",3);
a=Number(a);
switch(a){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;    
}
//traffic
let signal = "yellow";
switch(signal){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log('slow down');
        break;
    case "green":
        console.log("Go");
        break;
    default :
        console.log("unvalid");    
}
//month
let month = 7;
switch(month){
    case 12,1,2:
        console.log("winter");
        break;
    case 3,4,5:
        console.log('spring');
        break;
    case 6,7,8:
        console.log("summer");
        break;
    case 9,10,11 :
        console.log("fall");
        break;
}
//username
let username2 = "";
console.log(typeof username2);
if(username2){
    console.log("welcome");
}
else{
    console.log("enter usernsame");
}
//score 
let score4 = 0;
console.log(typeof score4);
if(username2){
    console.log("score is",score);
}
else{
    console.log("no score yet");
}
//vote
let age6 = 20;
let isCitizen = true;
let hasVoted = false;
if(age6>=18 && isCitizen && !hasVoted){
    console.log("eligible")
}
else{
    console.log("not eligible");
}
//discount
let total = 120;
let isPremium1 = false;
if(isPremium1){
    console.log("after 20% off",total*0.8);
}
else if(total>100){
    console.log("after 20% off",total*0.85);
}
else if(total>50){
    console.log("after 20% off",total*0.90);
}
//divisibility
let numb = 17;
if(numb%3===0 && numb%5===0){
    console.log( "FizzBuzz");

}
else if(numb%3===0){
    console.log("fizz");
}
else if(numb%5===0){
    console.log("buzz");
}
else{
    console.log(numb);
}
//vote
let age7 = prompt("enter your age",20);
age7=Number(age7);
if(age7>=18 ){
    alert("eligible");
}
else{
    alert("not eligible");
}
//calci
let x=Number(prompt("enter 1st number",3));
let y=prompt("enter operator");
let z=Number(prompt("enter 2nd number",2));
switch(y){
    case "+":
        alert(x+z);
        break;
     case "-":
        alert(x-z);
        break;
     case "*":
        alert(x*z);
        break;
      case "/":
        alert(x/z);
        break;
}
//golden string
let str3 = "Amazing";
if((str3[0]==="A"|| str3[0]==="a")&& str3.length>5){
    console.log("golden string");
}
else{
    console.log(no)
}
//largest of 3
let numb1 = 45;
let numb2 = 67;
let numb3 = 52;
if(numb1>numb2 && numb1>numb3){
    console.log(num1,"is graetest");
}
else if(numb2>numb1 && numb2>numb3){
    console.log(numb2,"is graetest");
}
else{
    console.log(numb3," is greaest");
}
//