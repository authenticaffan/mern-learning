var randomNumber1 = Math.floor(Math.random()*6)+1;

var images1 = "dice" + randomNumber1 + ".png";

var imageSource1 = "images/" + images1;

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src",imageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var images2 = "dice" + randomNumber2 + ".png";

var imageSource2 = "images/" + images2;

var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src",imageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("heading").innerText = "Player 1 Wins";
}
else{
    document.querySelector("heading").innerText = "Player 2 Wins";
}