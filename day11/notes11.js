// 1. Select the main image by its ID

const mainImage = document.querySelector('#mainImg');
console.log(mainImage);
console.log(mainImage.innerHTML)
// 2. Select all images with class "oldImg"
const allImages = document.querySelectorAll('.oldImg')
console.log(allImages)
// 3. Select all paragraph elements
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);
// 4. Select the description paragraph using querySelector
const desPara = document.querySelectorAll('#description')
console.log(desPara)
// 5. Select all links inside the .box div
const allLinks = document.querySelectorAll('.box a');
console.log(allLinks);

// 1. Get the text of the main heading
const mainHeading = document.querySelector('#heading1');
console.log(mainHeading.innerHTML);
// 2. Change the heading to "Exploring Our Solar System"
mainImage.innerText = 'Our amazing Solar System';
// 3. Get the innerHTML of the first paragraph
let firstPara = document.querySelector('p')
console.log(firstPara)
// 4. Change the first h2 to include a star emoji ⭐
let firsth2 = document.querySelector('h2');
firsth2.append("⭐")
console.log(firsth2);
// 5. Log the innerText of the description paragraph
console.log((document.querySelector('#description')).innerHTML)

// 1. Select all images with class "oldImg"

// 2. Log how many images you found
console.log(allImages.length)
// 3. Select the first paragraph and get its text
console.log(document.querySelector('p').innerHTML);
// 4. Change the main heading using innerHTML to include <strong> tags
mainHeading.innerHTML.append = '<strong>strong </strong>';
// 5. Select all boxLinks and log their count
console.log(allLinks.length);

//dom manipulation
//get attribute(atr)=read the current value
//set attribute(atr)=change the value
let solarImg=document.querySelector("img");

//change the id 
solarImg.setAttribute('id','galaxyImg')
let idName = solarImg.getAttribute('id');
console.log(idName);

//change the image source
//solarImg.setAttribute('src','assets/earth.jpg');

//get and change a links href
let link = document.querySelector('a')
console.log(link.getAttribute("href"));//current link
link.setAttribute('href',"https://nasa.gov");
//links now points to nasa website

//check if an attribute exists
let heading3 = document.querySelector('h1');
let headId = heading3.getAttribute('id');
console.log(headId);

//inline styles
//change text color
let heading1 = document.querySelector('h1');
heading1.style.color = 'orange';

//change background color camel cse
heading1.style.backgroundColor = 'black';

//change multiple styles
let paragraph1 = document.querySelector('p');
paragraph1.style.color = 'white'
paragraph1.style.fontSize = '20px';
paragraph1.style.padding = '15px';

//change image size
let img = document.querySelector('img');
img.style.width = "500px"
img.style.border
