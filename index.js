// creating 1st number
var random1 = Math.floor(Math.random() * 6) + 1;

var randomNum1 = "images/dice" + random1 + ".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomNum1);

// 
// creating 2nd number
var random2 = Math.floor(Math.random() * 6) + 1;

var ran2 = "images/dice" + random2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", ran2);
// 
// changing headline 
// 
if (random1 == random2) {
    document.querySelector("h1").innerHTML = "It's a Draw";
}
// draw between both
// 
else if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
}
// conditions for player 1
// 
else {
    document.querySelector("h1").innerHTML = "Player 2 wins !";
}
//conditions for player 2
//