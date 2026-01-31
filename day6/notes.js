// //let objectName = {key1:value1, key2:value2};
// let student={
//     name:"alice",
//     age:20,
//     grade:"A"
// }
// //product object
// let product= {
//     title:"laptop",
//     price:45000,
//     instock:true
// };
// //geographic location
// let locations = {
//     latitude:"28.704 N",
//     longitude:"77.76 E",
//     city:"delhi"
// }
// //book report
// let book={
//     title:"javascript guide",
//     author: "john ",
//     pages: 350,
//     published:2024
// };
// //social media post 
// let post ={
//     username:"coder_dev",
//     content:"learning javaScript",
//     likes: 150 ,
//     comments: 23
// }
// //accessing object properties
// //using dot notation
// let students = {name1:"alex", age:21, city:"seattle"};
// console.log(students.age);
// console.log(students.name1)
// //using bracket notation
// console.log(students["city"]);

// //spaces in key use bracket notation
// let person = {"first name":"john","last name":"doe"};
// console.log(person["first name"]);

// //using variables with bracket notaion
// let key="age";
// console.log(key);

// //mixed access
// let car ={brand:"toyota",model:"camry", year:2024};
// console.log(car["model"]);

// //add update delete
// //objects are mutable
// let students2={name2:"alex",age:21,city:"seatle"};
// students2.age=22;
// students2.city="boston";
// console.log(students2);

// //adding new properties
// students2.grade = "A+";
// students2.major="computer science";
// console.log(students2)

// //deleting properties
// delete students2.city;
// console.log(students2)

// //multiple modification
// let products2 = {name:"phone",price:3000}
// products2.price=1000;
// products2.name="i phone";
// console.log(products2)
// products2.brand="apple";
// delete products2.name;
// console.log(products2);

// //using square bracket for modify
// let cars = {brand:"suzuki"}
// cars['model']="civic";
// cars['year']=2024;
// console.log(cars);

// //nested objectsof objects
// let userDatabase ={
//     user1:{name:"alice",grade:"A+",city:"austin"},
//     user2:{name:"Bob",grade:"B",city:"Denver"}
// }
// console.log(userDatabase.user1.name);
// console.log(userDatabase.user2.name);

// //company departments
// let company ={
//     engineering:{ employees:50, manager:"john"},
//     sales:{ employees:30, manager:"sarah"},
//     hr:{ employees:10,manager:"mike"}
// };
// console.log(company.engineering.employees);
// console.log(company.sales.manager);

// //student records with subjects
// let students3={
//     student1: {name: "emma",math: 85, science:90},
//     student2: {name:"oliver",math:78, science:88}
// };
// console.log(students3.student1.math);
// console.log(students3.student2.science);

// //product inventory by category
// let inventory={
//     elctronics:{laptop:"dell",phone:"samsung"},
//     clothing:{shirts:100,pants:75}
// };
// console.log(inventory.elctronics.laptop);
// console.log(inventory.clothing.pants);

// //accessing and modifying nested values
// let school = {
//     classA:{ students: 30, teacher: "john"},
//     classB:{ students: 40, teacher: "mohd"}
// };
// school.classA.students=35;
// school.classB.teacher="hafiz";
// console.log(school.classA.students);
// console.log(school.classB.teacher);

// //array of objects
// //most api returns data in this form
// //list of students
// let students4=[
//     {name:"alice", age: 20, grade:"A"},
//     {name:"bob",age:30, grade:'B'}
// ];
// console.log(students4[0].name);
// console.log(students4[1].age)

// //product catalog
// let products = [
//     {id:101,name:"laptop",price:45000},
//     {id:102,name:"phone",price:10000},
//     {id:103,name:"watch",price:5000}
// ];
// console.log(products[0].name);
// console.log(products[1].id);

// //social media posts 
// let posts = [
//     {username:"user1",content:"hello",likes:50},
//     {username:"user2",content:"javascript",likes:120},
//     {username:"user3",content:"coding",likes:30}
// ];
// console.log(posts[0].likes)
// //post list
// console.log(posts[0]);

// //modifying array of objects
// posts[0].content="hello world";
// posts.push({username:"user3",content:"aiml",likes:1000});
// console.log(posts[0])
// console.log(posts)

// //math object
// console.log(Math.E)
// console.log(Math.PI)

// //absolute value
// console.log(Math.abs(-42));

// //power expo
// console.log(Math.pow(2,3));

// //rounding off up and down
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));

// //mathpi for calcu
// let radius = 5;
// let circum= 2*Math.PI*radius;
// let area = Math.Pi

// //math random
// //basic random decimal
// console.log(Math.random())

// //random decimal scaled at 10
// let num = Math.random()*10;
// console.log(num);

// //random integer scaled to 100
// let percentage = Math.random()*100;
// console.log(Math.floor(percentage));

// //random integer between 1 and 10 
// let num1 =Math.random()*10;
// console.log("new:",Math.floor(num1)+1);

// //random integer from 1 to 10 one line
// // let random = Math.floor(Math.random()*10)

// //random integer from 1 to 6 dice roll
// let dice = Math.floor(Math.random()*6+1)
// console.log(dice)

// //random number formula
// //Math.floor(Math.random()*(max-min+1))+min

// //random number from 5 to 10
// let num2= Math.floor(Math.random()*(10-5+1))+5;
// console.log(num2);

// //practical random number application
// //random choice from array
// let arr = ["green","blue","yellow","red"];
// console.log(arr);
// let randomIndex = Math.floor(Math.random()*arr.length);
// console.log("Random color:",arr[randomIndex]);

// //random quiz question selector
// let questions = ["q1","q2","q3","q4"];
// let randomQ = Math.floor(Math.random()*questions.length);
// console.log("Random question:",questions[randomQ]);

// //


