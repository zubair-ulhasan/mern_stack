// // Example 1: Using console.log() method
// console.log("Hello World");
// // Example 2: Using alert() method
// alert("Welcome to JavaScript!");
// // Example 3: Calling methods on strings
// let text = "JavaScript";
// text.toUpperCase();
// // Example 4: Methods can return values
// let message = " hello ";
// let cleaned = message.trim();
// console.log(cleaned); // "hello"
// // Example 5: Some methods take arguments
// let word = "Mountains";
// word.slice(0, 5); // "Mount"
// // Example 1: Basic trimming
// let username = " coding_wizard ";
// let clean = username.trim();
// console.log(clean); // "coding_wizard"
// // Example 2: Trimming user input
// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"
// // Example 3: Only removes leading and trailing spaces
// let text = " hello world ";
// console.log(text.trim()); // "hello world" (middle spaces remain)
// // Example 4: Original string unchanged
// let original = " test ";
// let trimmed = original.trim();
// console.log(original); // " test " (still has spaces)
// console.log(trimmed); // "test"
// // Example 5: Trimming empty spaces
// let input = " ";
// console.log(input.trim()); // "" (empty string)
// // Example 1: Basic trimming
// let username = " coding_wizard ";
// let clean = username.trim();
// console.log(clean); // "coding_wizard"
// // Example 2: Trimming user input
// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"
// // Example 3: Only removes leading and trailing spaces
// let text = " hello world ";
// console.log(text.trim()); // "hello world" (middle spaces remain)
// // Example 4: Original string unchanged
// let original = " test ";
// let trimmed = original.trim();
// console.log(original); // " test " (still has spaces)
// console.log(trimmed); // "test"
// // Example 5: Trimming empty spaces
// let input = " ";
// console.log(input.trim()); // "" (empty string)
// // Example 1: Converting to uppercase
// let msg = "JavaScript is Fun";
// console.log(msg.toUpperCase()); // "JAVASCRIPT IS FUN"
// // Example 2: Converting to lowercase
// let shout = "STOP YELLING";
// console.log(shout.toLowerCase()); // "stop yelling"
// // Example 3: Comparing user input (case-insensitive)
// let userInput = "YeS";
// if (userInput.toLowerCase() === "yes") {
//  console.log("User agreed!");
// }
// // Example 4: Mixed case conversion
// let mixed = "HeLLo WoRLd";
// console.log(mixed.toLowerCase()); // "hello world"
// console.log(mixed.toUpperCase()); // "HELLO WORLD"
// // Example 5: Working with email addresses
// let email = "User@EXAMPLE.COM";
// console.log(email.toLowerCase()); // "user@example.com"
// // Example 1: Finding a character
// let str = "Hello World";
// console.log(str.indexOf("W")); // 6
// console.log(str.indexOf("o")); // 4 (first occurrence)
// // Example 2: Finding a substring
// let sentence = "I love JavaScript";
// console.log(sentence.indexOf("love")); // 2
// console.log(sentence.indexOf("Java")); // 7
// // Example 3: Character not found
// let text = "Hello World";
// console.log(text.indexOf("z")); // -1
// // Example 4: Case sensitivity
// let word = "JavaScript";
// console.log(word.indexOf("java")); // -1 (case matters!)
// console.log(word.indexOf("Java")); // 0
// // Example 5: Checking if substring exists
// let message = "Welcome to coding";
// if (message.indexOf("coding") !== --1) {
//  console.log("Found the word coding!");
// }
// // Example 1: Basic chaining
// let msg = " hello ";
// let result = msg.trim().toUpperCase();
// console.log(result); // "HELLO"
// // Example 2: Three methods chained
// let input = " JAVASCRIPT ";
// let clean = input.trim().toLowerCase().slice(0, 4);
// console.log(clean); // "java"
// // Example 3: Cleaning user input
// let username = " UserName123 ";
// let processed = username.trim().toLowerCase();
// console.log(processed); // "username123"
// // Example 4: Complex chaining
// let text = " Hello World ";
// let output = text.trim().toUpperCase().replace("HELLO", "HI");
// console.log(output); // "HI WORLD"
// // Example 5: Order matters in chaining
// let word = "javascript";
// console.log(word.slice(0, 4).toUpperCase()); // "JAVA"
// console.log(word.toUpperCase().slice(0, 4)); // "JAVA" (same result)
// // Example 1: Basic slicing
// let word = "Mountains";
// console.log(word.slice(0, 5)); // "Mount"
// console.log(word.slice(5)); // "ains"
// // Example 2: Extracting middle portion
// let text = "JavaScript";
// console.log(text.slice(4, 10)); // "Script"
// // Example 3: Slicing from an index to end
// let message = "Hello World";
// console.log(message.slice(6)); // "World"
// // Example 4: Using negative indices (from end)
// let lang = "JavaScript";
// console.log(lang.slice(--6)); // "Script"
// console.log(lang.slice(0, --6)); // "Java"
// // Example 5: Getting first and last characters
// let name = "Alexander";
// console.log(name.slice(0, 1)); // "A" (first)
// console.log(name.slice(--1)); // "r" (last)
// / Example 1: Basic replacement
// let fruit = "I love apple pie";
// console.log(fruit.replace("apple", "cherry")); // "I love cherry pie"
// // Example 2: Only first occurrence is replaced
// let text = "I love apple pie and apple juice";
// console.log(text.replace("apple", "orange"));
// // "I love orange pie and apple juice"
// // Example 3: Case sensitivity
// let message = "Hello hello HELLO";
// console.log(message.replace("hello", "hi")); // "Hello hi HELLO"
// // Example 4: Replacing spaces
// let sentence = "Hello World";
// console.log(sentence.replace(" ", "-")); // "Hello-World"
// // Example 5: Chaining with replace
// let str = " javascript ";
// let result = str.trim().replace("java", "type");
// console.log(result); // "typescript"
// // Example 1: Creating a simple array
// let colors = ["red", "green", "blue"];
// console.log(colors); // ["red", "green", "blue"]
// // Example 2: Accessing array elements (0-indexed)
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // "apple"
// console.log(fruits[2]); // "mango"
// // Example 3: Arrays with different data types
// let mixed = ["hello", 42, true, 3.14];
// console.log(mixed[1]); // 42
// console.log(mixed[3]); // 3.14
// // Example 4: Array length property
// let numbers = [10, 20, 30, 40];
// console.log(numbers.length); // 4
// // Example 5: Accessing last element
// let items = ["first", "second", "third", "fourth"];
// let lastIndex = items.length -- 1;
// console.log(items[lastIndex]); // "fourth
// // Example 1: Changing an element
// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// console.log(fruits); // ["banana", "apple", "litchi"]
// // Example 2: Modifying multiple elements
// let numbers = [1, 2, 3, 4];
// numbers[0] = 10;
// numbers[3] = 40;
// console.log(numbers); // [10, 2, 3, 40]
// // Example 3: Changing last element
// let colors = ["red", "green", "blue"];
// colors[colors.length -- 1] = "yellow";
// console.log(colors); // ["red", "green", "yellow"]
// // Example 4: Arrays vs Strings mutability
// let arr = ["a", "b", "c"];
// arr[0] = "z"; // Works!
// console.log(arr); // ["z", "b", "c"]
// let str = "abc";
// str[0] = "z"; // Doesn't work
// console.log(str); // "abc" (unchanged)
// // Example 5: Updating based on condition
// let scores = [85, 90, 75, 88];
// if (scores[2] < 80) {
//  scores[2] = 80; // Bump up the low score
// }
// console.log(scores); // [85, 90, 80, 88]
// // Example 1: Using push() to add to end
// let fruits = ["apple", "banana"];
// fruits.push("mango");
// console.log(fruits); // ["apple", "banana", "mango"]
// // Example 2: Using pop() to remove from end
// let colors = ["red", "green", "blue"];
// let removed = colors.pop();
// console.log(removed); // "blue"
// console.log(colors); // ["red", "green"]
// // Example 3: Using unshift() to add to start
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers); // [1, 2, 3, 4]
// // Example 4: Using shift() to remove from start
// let items = ["first", "second", "third"];
// let firstItem = items.shift();
// console.log(firstItem); // "first"
// console.log(items); // ["second", "third"]
// // Example 5: Combining multiple operations
// let stack = [1, 2, 3];
// stack.push(4); // [1, 2, 3, 4]
// stack.push(5); // [1, 2, 3, 4, 5]
// stack.pop(); // [1, 2, 3, 4]
// stack.unshift(0); // [0, 1, 2, 3, 4]
// console.log(stack); // [0, 1, 2, 3, 4]
