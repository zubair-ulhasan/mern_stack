//1 string methods
let userInput= " HeLLo JaVaScRiPt  ";
let cleanInput=userInput.trim().toLowerCase();
console.log(userInput,cleanInput);
//2.email
let email= " USER@EXAMPLE.COM ";
let formattedEmail=email.trim().toLowerCase();
console.log(email,formattedEmail);
//3.index
let sentence = "JavaScript is awesome and JavaScript is fun";
let f1=sentence.indexOf("awesome");
console.log(f1);
let f2=sentence.indexOf("JavaScript");
console.log(f2);
console.log(sentence.indexOf('python'));
//4.message
let message = "Welcome to coding class";
if(message.indexOf("coding")!==-1){
    console.log("Found coding!");
}
else{
    console.log("Coding not found");
}
//5.chaining
let rawData = " MESSY iNpuT ";
let processedData=rawData.trim().toLowerCase();
console.log(rawData,processedData);
//6.paassword
let password = " MyP@ssw0rd123 ";
let securePassword = password.trim().toUpperCase().slice(0,8);
console.log(securePassword);
//7.slicing
let fullName = "Alexander Hamilton";
let firstName=fullName.slice(0,9);
let lastName=fullName.slice(9);
console.log(firstName,lastName);
//8. phone
let  phone = "9876543210";
let areaCode=phone.slice(0,3);
let lastFour=phone.slice(-4);
console.log("Area code:",areaCode ,"Last four:",lastFour);
//9.replace
let announcement = "The event will happen on Monday and Monday only";
let updatedAnnouncement=announcement.replace("Monday","Friday");
console.log(announcement,updatedAnnouncement);
//10.replace2
let template = "Hello NAME, welcome to our website";
let personalizedMessage = template.replace("NAME","Alice");
console.log(template,personalizedMessage);
//11.arays
let colors=["red", "green", "blue", "yellow"];
console.log(colors);
console.log(colors[0]);
console.log(colors[colors.length-1]);
console.log(colors.length);
//aray 2
let scores=[85, 92, 78, 90, 88];
console.log(scores[2]);
scores[0]=95;
console.log(scores);
console.log(scores[0]+scores[1]);
//7.array methods
let playlist=[];
playlist.push("Song1");
console.log(playlist);
playlist.push("Song2");
console.log(playlist);
let lastarray=playlist.pop();
console.log(lastarray, playlist);
playlist.unshift("Song0");
console.log(lastarray, playlist);
//8.arrat met2
let queue = ["First", "Second", "Third"];
let served=queue.shift();
queue.push("Fourth");
let served2=queue.shift();
console.log(queue,served,served2);
//9.serch index array
let  fruits = ["apple", "banana", "mango", "orange", "banana"];
console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("grape"));
//10.array include
let inventory = ["laptop", "mouse", "keyboard", "monitor"];
if(inventory.includes("mouse")){
    console.log("Mouse is available")
}
else{
    console.log("no mouse");
}
if(inventory.includes("printers")){
    console.log("Printer is available")
}
else{
    console.log("Printer is not available");
}
//11.concat
let morningClasses = ["Math", "English", "Science"];
let afternoonClasses = ["History", "Art", "PE"];
let fullSchedule=[].concat(morningClasses,afternoonClasses);
console.log(fullSchedule,"classes:",fullSchedule.length);
//12.reverse
let numbers = [1, 2, 3, 4, 5];
let New=numbers.reverse();
console.log(numbers,New);
//splice
let months = ["Jan", "Feb", "Mar", "May", "Jun"];
months.splice(3,"Apr");
console.log(months);
//halticket reader
let ht=prompt("enter your hallticket number:","161021748027");
let cc=ht.slice(0,4);
console.log("college code:",cc);
let bt=ht.slice(4,6);
console.log("batch:",bt);
let br=ht.slice(6,9);
console.log("branch code:",br);
let rl=ht.slice(9);
console.log("roll number:",rl);
