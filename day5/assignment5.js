//4.1 left over 
//1.sort
let fruits = ["banana", "apple", "mango", "cherry", "orange"];
fruits.sort();
console.log(fruits);
//2.sort  with numbers
let nums = [5, 10, 1, 100, 25];
nums.sort();
console.log(nums);//nums are sorted as strings
//3.sort scores in ascending order 
let scores = [78, 92, 85, 88, 95, 73];
scores.sort((a,b)=>a-b);
console.log(scores);
//4.desconding order
scores.sort((a,b)=>b-a);
console.log(scores);
//5.join method creates new string 
let words = ["JavaScript", "is", "awesome"];
let result =words.join(" ");
console.log(result);
let result1=words.join("-");
console.log(result1);
let result2=words.join("");
console.log(result2);
//6.join 2
let dateArray = ["2024", "12", "25"];
let new1=dateArray.join("/");
console.log(new1);
let new2=dateArray.join("-");
console.log(new2);
let  time = ["14", "30", "00"];
let newtime=time.join(":");
console.log(newtime);
//7.array to string 
let numbers1 = [1, 2, 3, 4, 5];
let numbers2=numbers1.toString()
console.log(numbers2);
console.log(typeof numbers2);
let numbers3=numbers1.join();
console.log(numbers3);
//8. nested
let grid = [[1, 2], [3, 4], [5, 6]] ;
let grid2=grid.toString();
console.log(grid2);
let grid3=grid.join();
console.log(grid3);
//9.aray constructor
let arr1=new Array();
console.log(arr1,arr1.length);
let arr2=new Array(5);
let arr3=new Array(10,20,30);
console.log(arr2,arr2.length);
console.log(arr3,arr3.length);
//10.manual array constuctor
let arr4=new Array(4);
arr4=["a", "b", "c", "d"];
console.log(arr4);
//array literal
//7.array .is method insted of type of which returns object
console.log(Array.isArray(arr1));//true if arraly
console.log(Array.isArray("hello"));
//8.is array
let data1=[1,2,3];
if(Array.isArray(data1)){
    console.log(`It's an array with ${data1.length} elements`)
}
else{
    console.log("not an array");
}        
//9.multi dimenarray
let matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];
// Print the element at row 0, column 2
console.log(matrix[0][2]);
// Print the element at row 2, column 0
console.log(matrix[2][0]);
// Print the center element (row 1, column 1)
console.log(matrix[1][1]);
// Change the center element to 50 and print the entire matrix
matrix[1][1]=50;
console.log(matrix);
//10.2-d arary
let seats = [
 ["Alice", "Bob", "Charlie"],
 ["David", "Eve", "Frank"]
];
// Print who is sitting at row 0, column 1
console.log(seats[0][1]);
// Print who is sitting at row 1, column 2
console.log(seats[1][2]);
// Swap the positions of Alice and Frank
seats[0][0]="frank";
seats[1][2]="alice";
console.log(seats)
// Print the updated seating chart
//11.2d aray part 2
let grades = [
 ["John", 85, 90, 88],
 ["Sarah", 92, 88, 95],
 ["Mike", 78, 85, 80]
];
// Print John's second test score
console.log(grades[0][2]);
// Print Sarah's name
console.log(grades[1][0]);
// Calculate Mike's total score (sum of all three test scores)
console.log((grades[2][1]+grades[2][2]+grades[2][3])/3);
// Print the results
//12.tic tac
let game = [
 ["X", "O", "X"],
 ["O", "X", "O"],
 ["O", "X", "X"]
];
// Print the top-left corner (row 0, column 0)
console.log(game[0][0]);
// Print the center position (row 1, column 1)
console.log(game[1][1]);
// Change the bottom-right corner to "O"
game[2][2]="O";
// Print each row on a separate line
console.log(game[0]);
console.log(game[1]);
console.log(game[2]);
//13.aray length
let items = [10, 20, 30, 40, 50];
console.log(items.length);
items.length=3;
console.log(items);
console.log(items[4]);
//14.array methods
let numbers4 = [1, 2, 3];
numbers4[10]=99;
console.log(numbers4,numbers4.length);
console.log(numbers4[5]);
//15.multiple arrays
// Question 1: Create an array words = [" hello ", " WORLD ", " JavaScript "] . Then:
let words3 = [" hello ", " WORLD ", " JavaScript "];
// Trim each element manually and store in a new array
let newwd=[];
for(i=0;i<=2;i=i+1) {
newwd.push(words3[i].trim().toLowerCase())
}
newwd.sort();
let res=newwd.join(",")
console.log(res);

// Sort the new array alphabetically
// Join the sorted array with spaces
// Print the final result
//16.concat
let morningTasks = ["Exercise", "Breakfast", "Study"]
let eveningTasks = ["Dinner", "Reading", "Sleep"]
let tot=[].concat(morningTasks,eveningTasks);
console.log(tot);
tot.splice(3,0,"Lunch");
tot.sort();
console.log(tot);
//17.array refrencing vs refrences
let original = [1, 2, 3, 4, 5];
let refrence= original;
let copy=original.slice();
console.log(copy);
//console.log(refrence);
refrence[0]=99;

copy[0]=88;
console.log("copy:",copy);
console.log("refrence",refrence);
console.log("orignal",original);
//refrence pointed to same address as of original but copy is differnt slice operator
//18. aray refrence 2
let colors = ["red", "green", "blue"];
let palette1=colors;
let palette2=colors;
palette1.push("yellow");
console.log("colors",colors);
console.log("palette1",palette1);
console.log("palette2",palette2);
//all pointed to same array address
//19.array mainipulation methods
let numbers = [10, 20, 30, 40, 50];
let first=numbers.shift();
console.log(first);
numbers.push(first);
console.log(numbers);
let second=numbers.shift();
console.log(second)
numbers.push(second);
console.log(numbers)
//20.array mani 2
let items2 = ["apple", "banana", "cherry", "date", "banana"];
console.log(items2.indexOf("banana"));
items2.splice(1,1);
console.log(items2);
//21.array methods safely
let data2 = [5, 10, 15, 20, 25];
for(i=0;i<data2.length;i++){
if(i<data2.length){
    console.log(data2[i]);
}
else{
    console.log("no valid index")
}
}
//22.array manipulation
let input=[1,2,3];
input="hello"//array check
if(Array.isArray(input)&& input.length>0){
    console.log(input[0])
}
else{
    console.log("no array");
}
//23.practical array appli
let cart=[];
cart.push( "Laptop", "Mouse", "Keyboard");
console.log(cart);
console.log(cart.length);
let last=cart.pop();
console.log(last);
console.log(cart);

//25. array
let highScores = [150, 200, 180, 220, 190];
highScores.sort((a,b)=>b-a);
console.log(highScores.shift())
console.log("Top 3 scores:",highScores.slice(0,3),"|",highScores.slice(3))

//24.complex 
let allScores = [85, 92, 78, 95, 88, 73, 90];
let copy1=allScores.slice();
copy1.sort((a,b)=>a-b);
let first2 =copy1.shift()
console.log(first2)
console.log(copy1)
copy1.pop();
console.log(copy1.join(","))
//average of array values
let totl=0;
for(i=0;i<copy1.length;i++){

totl=totl+allScores[i];

}
let avg=totl/3;
console.log(avg);
//25.task mangement
let tasks = ["Task1", "Task2", "Task3", "Task4"];
let new3= tasks.shift();
tasks.push(new3);
tasks.splice(1,1,"Task2.5");
console.log(tasks);
for(i=0;i<tasks.length;i++){

console.log(tasks[i]);

}
//arary edge cases
let numbers5 = [1, 10, 2, 20, 3, 30];
// Sort it without a compare function and print the result
console.log(numbers5.sort());
// Now sort it with sort((a, b) => a - b) and print the result
console.log(numbers5.sort((a,b) => a-b))
// Explain in a comment why the results are different
//sorting is done as string compariosion only it compares the first values ..ascii values

//26.sparse 
let sparse = [1, , , 4, , 6];
console.log(sparse.length);
console.log(sparse[2]);//undefined
sparse.push(7);
console.log("sparse",sparse,"sparse length",sparse.length);

//assignment 5
//1.Write a for loop that prints all numbers from 1 to 10.
for(i=1;i<=10;i++){
    console.log(i);
}
//2.Write a for loop that prints only even numbers from 2 to 20.
for(i=2;i<=20;i=i+2){
    console.log(i);
}
//3.Write a for loop that counts down from 10 to 1, then prints "Blast off!".
for(i=10;i>=1;i--){
    console.log(i);
}
//4.Write a for loop that prints the multiplication table of 7 (from 7 × 1 to 7 × 10)
for(i=1;i<=10;i++){
    console.log("7*",i,"=",i*7);
}
//5.Write a for loop that calculates the sum of numbers from 1 to 20. Store the result in a variable called sum and print it.
let sum=0;
for(i=1;i<=20;i++){
    sum=sum+i;
}
 console.log(sum);
//6.grid
for(i=1;i<=4;i++){
    let str1=" ";
    //console.log(i);
    for(j=1;j<=4;j++){
        str1=str1+j+" ";
        
    }
    console.log(str1);
}
//7.Use nested for loops to print this star pattern:

let str2="";
    for(j=0;j<=4;j++){
        
        str2=str2+"*"+" ";
        console.log(str2);
    }
//8.Write a while loop that keeps adding numbers (1, 2, 3, 4...) to a sum until the sum reaches or exceeds 50. Print the final sum and how many numbers were added.
let i1=1;
let sum1=0;
while(sum1<=50){
sum1=sum1+i1;
i1++;  
console.log(sum1);
}
console.log("final sum:",sum1);
console.log("numbers added:",i1);
// Write a do...while loop that displays a simple menu. The loop should continue until the user enters
// "exit".
// Use prompt() to get user input
// Note: You can test this in browser console
let userInput=prompt("Menu: Type 'hello' or 'exit'","hello")
//while(userInput==="hello"){//infinte loop
if(userInput===){
    console.log("Hello to you too!")
}
else if(userInput==="exit"){
     "Goodbye!"
} do()
//}
