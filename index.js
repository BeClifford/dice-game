var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generate from 1-6 all inclusive
const randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); // changes the first image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // generate from 1-6 all inclusive
const randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); // changes the second image


if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
document.querySelector("h1").innerHTML = "It's a Draw!";
};

