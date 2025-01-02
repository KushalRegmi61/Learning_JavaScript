var randomnum1 = Math.floor(Math.random()* 6) + 1;
var randomnum2 = Math.floor(Math.random()* 6) + 1; 

//  changing the left  and right side image dynamically.
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomnum1 + ".png");

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomnum2 + ".png");


// control statement to view winners in hq 
if (randomnum1>randomnum2){
    document.querySelector(".container h1").textContent="Player 1 Wins";
}

else if(randomnum2>randomnum1){
    document.querySelector(".container h1").textContent="Player 2 Wins";
}

else {
    document.querySelector(".container h1").textContent="It's a Dara";

}