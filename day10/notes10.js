//document object model
//dom is a programming interface for web documents
//it represents the page so that programs can change the document structure, style, and content
//the dom represents the document as nodes and objects
//that way programming languages can connect to the page
//the dom is created when the page is loaded

console.log(document);

//document object 
console.dir(document);

//selecting elements by ids

//check if element exist
let header = document.getElementById("header");
console.log(header);
// header.style.color = "blue";
// header.style.backgroundColor = "yellow";

//main image 
let mainImage = document.getElementById("mainImg");
console.log(mainImage);

//select the heading
let heading = document.getElementById("h1");
console.log(heading);

//selecting element by class name
//classes are used when you want to call multipe elements by same name 

//selecting all small images

let oldImage = document.getElementsByClassName("oldImg");
console.log(oldImage);

//accessing individual elements

let oldImages = document.getElementsByClassName("oldImg");
console.log(oldImages[0]);
console.log(oldImages[1]);

//loop through the collection 
let oldImages1 = document.getElementsByClassName('oldImg');
for(let i =0; i<oldImages.length; i++){
    console.log(oldImages1[i])
}
//select box link
let boxLinks = document.getElementsByClassName("boxLink");
console.log(boxLinks)

//selecting elements by tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//count elements
console.log("Number of paragraphs:", paragraphs.length);

//select all links
let allLinks = document.getElementsByTagName("a");
console.log(allLinks);

//count all links
console.log("Number of links:", allLinks.length);

//select all images
let allImages = document.getElementsByTagName("img");
console.log(allImages);

//queryselectors
//# for ids
//. for classes
//use tag names directly

//select by id 
let heading1= document.querySelector("#h1");
console.log(heading1);

//select first element by class
let firstOldImage = document.querySelector("oldImg");
console.log(firstOldImage);

//select all elements with queryselectorall
let allOldImages = document.querySelectorAll(".oldImg");
console.log(allOldImages);

//select by tag 
let firstparagraph = document.querySelector('p');
console.log(firstparagraph)

//complex selectors 
let boxLinks1 = document.querySelectorAll(".boxLink a");
console.log(boxLinks1);

//diff bw get element by id and query selector
//getElementById is like exact 
//queryselector  is like nearby coffee shop

//inner text
//get visible text 
let para = document.querySelector("#p1");
console.log(para.innerText)

//change heading text
let heading2 = document.querySelector("#h1");
heading2.innerText = "welcome to dom page";
console.log(heading2)

//get text from multiple elements
let firstPara = document.querySelector("p");
console.log(firstPara.innerText);

//text content
let para2 = document.querySelector('#h1')
console.log(para2.textContent);

//change text content
para2.textContent = "this is changed by text content";
console.log(para2.textContent);

//compare with inner text
let element1 = document.querySelector("#description");
console.log(element1.innerText);
console.log(element1.textContent);

//inner html
let para3 = document.querySelector('.boxLink');
console.log(para3.innerHTML);   
console.log(element1.innerHTML);

//adding html tags
para3.innerHTML = "<u>The solar system</u>";

//add complex html
let heading3 = document.querySelector('.boxLink');
heading3.innerHTML = "The <span style = 'color:gold;'></span> "
console.log(heading3)
//read links from paragraph
let para4 = document.querySelector("#p1")
console.log(para4.innerHTML)

//





