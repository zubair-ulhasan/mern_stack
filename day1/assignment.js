//Answer1
let firstName = "Zubair";
let age3 = 22;
let isStudentt = true;
let favColor = "Navy Blue";
let noOfSiblings = 3;
console.log(firstName, age, isStudent, favColor, noOfSiblings);

//Answer2
console.log(typeof firstName);
console.log(typeof age3);
console.log(typeof isStudentt);
console.log(typeof favColor);
console.log(typeof noOfSiblings);

//Answer3
let marks;
console.log(marks);
console.log(typeof marks);
let mark = null;
console.log(mark);
console.log(typeof mark);
//null is use when we dont know value but dont want to leave the space and its type is object whereas undefined is something which is declared but not assign and its is also undefined

//Answer4
let firstname = "Zayn";
let lastname = " Baqtiyaar";
let fullname = firstname + lastname;
console.log(fullname);

//Answer5
//prediction
// 53
// string
let e = "5";
let r = 3;
let resulllt = e + r;
console.log(resulllt);
console.log(typeof resulllt);
//here "5" is in double quotes representing string

//Answer 6
let num1 = 45;
let num2 = 12;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Answer7
let Celsius = 25;
let Fahrenheit = (Celsius * 9 / 5) + 32;
console.log("25 Clesius is equal to " + Fahrenheit);

//Answer8
let radius = 7;
let circumference = 2 * Math.PI * radius;
console.log(circumference.toFixed(2));
let area = Math.PI * radius;
console.log(area.toFixed(2));

//Answer9
let noteBook = 135;//45*3
let pens = 30;//15*2
let backPack = 850;//850*1
let subTotal = noteBook + pens + backPack;
console.log("Subtotal = " + subTotal);
let discount = subTotal * 0.10;
console.log("Discount amout 10% on subtotal " + discount);
let finalTotal = subTotal - discount;
console.log("Final total: " + finalTotal);

//Answer10
let number = 17;
if (number % 2 === 0) {
  console.log(number + " is even")
}
else {
  console.log(number + " is odd");
}

//Answer11
// a)
let output1 = 10 + 5 * 2;
console.log(output1);
// Your prediction: 20(5*2=10+10=20)
// Actual output: 20
// b)
let output2 = (10 + 5) * 2;
console.log(output2);
// Your prediction: 30((10+5)=15*2=30)
// Actual output: 30
// c)
let output3 = 20 / 4 + 3 * 2;
console.log(output3);
// Your prediction: 11(3*2=6,20/4=5,6+5=11)
// Actual output: 
// d)
let output4 = 2 ** 3 + 5;
console.log(output4)
// Your prediction:13(2**3=8+5=13) 
// Actual output:13
// e)
let output5 = (8 + 2) / 5 * 3;
console.log(output5);
// Your prediction: 6(8+2=10/5*3=15=6)
// Actual output: 6

//Answer12
let output = (10 + 20) * 5 / 3;
console.log(output);//50

//ANswer13
let finalResult = (((15 + 5) * 3 - 10) / 4);
console.log(finalResult);//12.5

//Answer14
let balance = 5000;
console.log("Initial Balance: ₹" + balance);
// Salary credited
balance += 15000;
console.log("After Salary Credit: ₹" + balance);
// Rent paid
balance -= 8000;
console.log("After Rent Payment: ₹" + balance);
// Bonus received
balance += 5000;
console.log("After Bonus Credit: ₹" + balance);
// Shopping expense
balance -= 3000;
console.log("After Shopping Expense: ₹" + balance);

//Answer15
let amount = 10000;
console.log("Initial Investment: ₹" + amount);
// Year 1
amount *= 1.10;
console.log("After Year 1: ₹" + amount);
// Year 2
amount *= 1.10;
console.log("After Year 2: ₹" + amount);
// Year 3
amount *= 1.10;
console.log("After Year 3: ₹" + amount);

//Answer16
//prediction
let xx = 10;
let yy = xx++;
//xx=11,yy=10(post increment)
console.log("x:", xx, "y:", yy);
let aaa = 10;
let bb = ++aaa;
//aaa,bb=11(preincremnet)
console.log("a:", aaa, "b:", bb);

//Answer17
let countdown1 = 10;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);
countdown1--;
console.log(countdown1);

//Answer18
let num = 5;
let newNum = num++; //6->7 
newNum = ++num; // 5->7

//Answer19
// a)
let result1 = 0 / 0;
// Result: NaN
// b)
let result2 = "hello" * 5;
// Result: NaN
// c)
let result3 = NaN + 10;
// Result:NaN
// d)
let result4 = Math.sqrt(--1);
// Result:syntax error
// e)
console.log(typeof NaN);
// Result:NaN

//Answer20
let value1 = 100;
let value2 = "test" / 2;
let value3 = 0 / 0;
let value4 = "123";
console.log("value1 is NaN:", Number.isNaN(value1));//false
console.log("value2 is NaN:", Number.isNaN(value2));//true
console.log("value3 is NaN:", Number.isNaN(value3));//true
console.log("value4 is NaN:", Number.isNaN(value4));//false

//Answer21
let math = 85;
let science = 92;
let english = 78;
let history = 88;
let computer = 95;
let average = (math + science + english + history + computer) / 5;
console.log("Your average grade is " + average);//87.6

//ANswer22
let currentYear = 2024;
let birthYear = 2000;
let age = currentYear - birthYear;
console.log("In " + currentYear + ", you are " + age + " years old");//24

//Answer23
let number1 = 10;
let number2 = 20;
number1 = number1 + number2;
number2 = number1 - number2;
number1 = number1 - number2;
console.log(number1, number2);//a=20,b=10

//Answer24
let num11 = 456;
// First digit
let firstDigit = Math.floor(num11 / 100);
// Remove first digit
let remaining = num11 % 100;
// Second digit
let secondDigit = Math.floor(remaining / 10);
// Last digit
let lastDigit = remaining % 10;
// Sum of digits
let sum = firstDigit + secondDigit + lastDigit;
console.log("Sum of digits:", sum);



