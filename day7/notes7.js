//function defination and calling 
// function sayHello(){
//     console.log("Hello!world");
// }
// sayHello();
// //displaying a message
// function showMsg(){
//     console.log("learning functions is fun");
// };
// showMsg();

//function with arguments
//arguments = values passed to while calling a function
//parameters = values which function accepts 
//personalized greeting
// function personalize(name,age){
//     console.log("Welcome",name,"you are",age ,"years old");
// }
// personalize("zubair","20");

//calculate sum o f2
// function sum(a,b){
//     return a + b;
// };
// let total = sum(2,3);
// console.log(total)

//rectangle area
// function area(l,b){
//     return l*b;
// }
// let rectangleArea = area(5,4);
// console.log(rectangleArea)

//using return value in calculations
// function getPrice(){
//     return 50;
// }
// let newPrice = getPrice()+tax+getSelection;

//return strings
// function greet(name){
//     return "hello!"+name;
// }
// let final = greet("zubair");
// console.log(final);

// //scope
// //global scope = accessible everywhere 
// //functional scope = accessed inside the function and child
// //block scope = accessed indide the block only

// //lexical scope = inner function can access values from parent but not vice versa
// //ex
// function parent(){
//     let a = 20;
//     function child(){
//         console.log(a);
//     }
//     child()
// }
// parent()

// //multiple levels of nesting 
// function outer(){
//     let a = 10;
//     function inner1(){
//         let b = 20 ;
//         function inner2(){
//             let c= 30;
//             function inner3(){
//                 let d= 40
//                 console.log(a,b,c,d);
//             }inner3();
//         }inner2()
//     }inner1()
//     // error:console.log(c)
// }
// outer()

// //outer can't access inner variables 
// //we can use outer parameters in inner function also

// //function expresssion= storing a function inside a variable 
// //basic function expression
// const multiply = function(a,b){
//     return a*b;
// }
// console.log(multiply(2,3));

// //greeting function expression
// const greet1 = function(name){
//     return "hello!"+name;
// };
// console.log(greet1("zubair"));

// //arrow function modern syntax
// const square = (side)=>{
//     return side*side
// }
// console.log("area of square:",square(2));

// //higher order functions(manger)=they either accept other function as an argument or return fuctions

// //accepting another function 
// function repeatTask(func,n){
//     for(let i=0;i<n;i++){
//         func();
//     }
// };
// const alertuser = ()=>{
//     console.log("alert!");
// };
// repeatTask(alertuser,4)

// //apply discount to price 
// const finalPrice = (price,percent)=>{
//     let disc=price*percent/100;
//     return price- disc;
// };
// console.log(finalPrice(200,10));

//exeecute differnt operations
// function operation(a,b,operations){
//     return operations(a,b);
// }
// const sum = (a,b)=>{
//     return a+b;
// }
// const mul = (a,b)=>{
//     return a*b;
// }
// console.log(operation(2,3,sum));

// //process array elements
// function processArray(arr,proc){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=proc(arr[i]);
//     }
// }   
// const printDouble=(num)=>console.log(num*2);

// processArray([1,2,3,4],printDouble);

//methods are functions that are defined inside an onject as properties 
const car={
     brand:"toyota",
     start(){
        console.log("Engine is on")
     },
     stop(){
        console.log("Engine is off")
     }
}
console.log(car.start());
car.start();
car.stop();

//shorthand method syntax
//calci
const calculator= {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calculator.add(2,3))

//person object with methods
const person ={
    greet(name){
        return "welcome"+name;
    },
    age(age){
        return "your age is"+ age;
    }
}
console.log(person.greet("alice"));

//bank account object
const account ={
    balance: 1000,
    deposit(amount){
        this.balance = this.balance + amount;
        console.log("new balance:"+this.balance);
    },
    withdraw(amount){
        this.balance = this.balance- amount;
        console.log("new balance:"+this.balance);
    }
}
account.deposit(2000);
account.withdraw(2000);

//string formatter object
//counter
let counter ={
    count:0,
    increment(){
        this.count++;
        console.log("count:"+this.count)
    },
     decrement(){
        this.count--;
        console.log("count:"+this.count)
    },
    reset(){
        this.count =0;
        console.log("counter reset");
    }
}
counter.increment()
counter.decrement()
counter.reset()