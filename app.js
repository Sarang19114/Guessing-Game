let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("Guesses");

let ans = Math.floor(Math.random()*100)+1;
let numGus = 0;

btn.addEventListener('click', () => {
    gusnum();
})

function gusnum() {
    if(input.value<1 || input.value >100 || isNaN(input.value))
        wrng.innerHTML = "Enter a number";
    else {
        numGus++;
        guesses.innerHTML = "No. of Guess : "+numGus;   
        if(input.value > ans) {
            wrng.innerHTML = "You guessed too High!";
            input.value = "";
        }
        else if (input.value < ans) {
            wrng.innerHTML = "You guessed too Low!";
            input.value = "";
        }
        else {
            wrng.innerHTML = "yay you guessed right!"
            setTimeout(() => {
                resetGame();
            }, 5000)
        }
    }
}

function resetGame() {
    numGus =0;
    ans = Math.floor(Math.random()*100)+1;
    input.value = "";
    guesses.innerHTML = "No. of Guess: 0";
}



