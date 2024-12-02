// JavaScript IPO Written Response

// Question 1 (7 marks)
// The user types any 3 letter word in the input. Then, in the box below, their name appears, surrounded by stars. For example:

//    *********
//    ***CAT***
//    *********

// Input
var yourName = "Name";
let txt = document.getElementById("q1-input");
let btn = document.getElementById("q1-btn");
let responseName = document.getElementById("q1-out");
txt.addEventListener("change", theName);
function theName() {
  let word = txt.value;
  let star1 = "*********";
  let star2 = "*********";
  yourName += word;
  responseName.innerHTML = `${star1} <br /> ***${word}*** <br /> ${star2}`;
}

// Question 2 (8 marks)
// When the user clicks the button, these 4 things happen:
//  - The image changes from hulk to captain america (the images are already in the images folder)
//  - The h2 should say "Captain America" instead of "The Incredible Hulk"
//  - The site background changes to blue (this is the color along the sides that is currently green)
//  - The border color around the image changes to blue

// Input
let clickBtn = document.getElementById("q2-btn");
clickBtn.addEventListener("click", changeWebsite);
function changeWebsite() {
  document.getElementById("q2-img").src = "images/captain.jpg";
  document.getElementById("q2-char").innerHTML = "Captain America";
  document.getElementById("html").style.background = "blue";
  document.getElementById("q2-div").style.borderColor = "blue";
}

// Question 3 (10 marks)
// When the user clicks the button, take the numbers typed in the radius, height, and slant inputs, and calculate both the volume and area of the cone.  Then output the results to the appropriate spans. Round to 2 decimal places. Use either 3.14 or Math.PI for your calculations.

// Input
let radius = document.getElementById("q3-radius");
let height = document.getElementById("q3-height");
let slant = document.getElementById("q3-slant");
let calcBtn = document.getElementById("q3-btn");
let volumeResult = document.getElementById("q3-volume");
let areaResult = document.getElementById("q3-area");
calcBtn.addEventListener("click", calculate);
function calculate() {
  let r = Number(radius.value);
  let h = Number(height.value);
  let s = Number(slant.value);

  // Process
  let volume = (1 / 3) * 3.14 * r ** 2 * h;
  volume = volume.toFixed(2);

  let area = 3.14 * r ** 2 + 3.14 * r * s;

  //   Output
  volumeResult.innerHTML = volume;
  areaResult.innerHTML = area;
}
