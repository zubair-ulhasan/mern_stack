//1.splice1
let months = ["Jan", "Feb", "Mar", "May", "Jun"];
months.splice(3,0,"Apr");
console.log(months);
//2.splice
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
students.splice(2,1,"Frank","Grace");
console.log(students);
//3.array refrences
let original = [1, 2, 3];
let refrence=original;
refrence[0]=99;
console.log(original);
console.log(refrence);
//both array points to same address
//4.array refence
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1==arr2);
//false since they check addresses
console.log(arr1);
console.log(arr2);
console.log(arr1===arr2);
//false since they check addresses
console.log(arr1);
console.log(arr2);
//5.nested array
let board = [
 ["X", "O", "X"],
 ["O", "X", "O"],
 ["X", "O", "X"]
];
// Print the value at row 0, column 1 (should be "O")
console.log(board[0][1]);
// Print the value at row 2, column 2 (should be "X")
console.log(board[2][2]);
// Change the center position (row 1, column 1) to "O"
board[1][1]="O";
console.log(board[1][1]);
// Print the entire board
console.log(board);
//6.nested 2
let scores = [
 ["Alice", 85, 90, 92],
 ["Bob", 78, 85, 88],
 ["Charlie", 92, 88, 95]
];
//Print Alice's second test score (90)
console.log(scores[0][2]);
// Print Charlie's name
console.log(scores[2][0]);
// Calculate and print Bob's average score (all three scores added and divided by 3)
console.log((scores[1][1]+scores[1][2]+scores[1][3])/3);
// Change Bob's first score from 78 to 82 and print the updated array
scores[1][1]=82;
console.log(scores);
//7.slice method
let numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers.slice(2,5));
console.log(numbers.slice(-3));
console.log(numbers);//original array is unchanged
//slice 2
let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];
let morningPlaylist=songs.slice(0,3);
console.log(morningPlaylist);
let eveningPlaylist=songs.slice(-2);
console.log(eveningPlaylist);
let aftningPlaylist=songs.slice(-5);
console.log(aftningPlaylist);
//splice advance
let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
let removed = colors.splice(2,2);
console.log(removed);
console.log(colors);
//splice2
let numbers2 = [1, 2, 3, 7, 8, 9]
// Insert 4, 5, and 6 at index 3 (without deleting anything)
numbers2.splice(3,0,4,5,6);
// Print the corrected array
console.log(numbers2);
// Verify that the array now contains [1, 2, 3, 4, 5, 6, 7, 8, 9]  yes

