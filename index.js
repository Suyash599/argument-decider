
var num1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + num1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var num2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (num1 > num2) {
  document.querySelector("h1").innerHTML = "🚩 1 Wins the argument!";
}
else if (num2 > num1) {
  document.querySelector("h1").innerHTML = "2 Wins the argument! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
