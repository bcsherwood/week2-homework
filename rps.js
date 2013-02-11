var headline = document.getElementById("head");
headline.innerHTML = "Rock - Paper - Scissors"

var user = document.getElementById("user_pick");
var computer = document.getElementById("computer_pick");
var win = document.getElementById("winner");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var choices = ["rock", "paper", "scissors"]

var weapons = document.querySelector(".weapons");

rock.onclick = function(){
	user.innerHTML ="rock";
	computer.innerHTML = choices[Math.floor(choices.length*Math.random())];
	win.innerHTML="The winner is " + "";
}
paper.onclick = function(){
	user.innerHTML ="paper";
	computer.innerHTML = choices[Math.floor(choices.length*Math.random())];
	win.innerHTML="The winner is " +"";
}
scissors.onclick = function(){
	user.innerHTML ="scissors";
	computer.innerHTML = choices[Math.floor(choices.length*Math.random())];
	win.innerHTML="The winner is " +"";
}


