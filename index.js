var player1 = prompt("Enter first player name");
var player2 = prompt("Enter second player name");

document.querySelector(".player-1 p").textContent = player1;
document.querySelector(".player-2 p").textContent = player2;

var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".player-1 img").setAttribute("src", "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".player-2 img").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = player1 + " wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = player2 + " wins"
} else {
    document.querySelector("h1").textContent = "It's a draw"
}