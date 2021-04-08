let numberArray = [];
let correctChoice = 0, guessedNumber = 0, tries = 3;
let numberChoice1 = document.getElementById("guessNumber1")
let numberChoice2 = document.getElementById("guessNumber2")
let numberChoice3 = document.getElementById("guessNumber3")


function generate(){
    numberArray[0] = Math.floor(Math.random() * 10) + 1;
        console.log(numberArray[0]);
    numberArray[1] = Math.floor(Math.random() * 10) + 1;
        console.log(numberArray[1]);
    numberArray[2] = Math.floor(Math.random() * 10) + 1;
        console.log(numberArray[2]);

    correctChoice = numberArray[Math.floor(Math.random() * 2)];
        console.log(`Escolha correta: ${correctChoice}`);
        
        numberChoice1.innerText = numberArray[0];
        numberChoice2.innerText = numberArray[1];
        numberChoice3.innerText = numberArray[2];
}

window.onload = generate();

function reset(){
    window.reset()
}

function winEvent(){
    message.innerText = "Parabéns, você acertou!";
        if ( parseInt(numberChoice1.innerText) == guessedNumber )
            numberChoice1.style.backgroundColor = "green";
        else if ( parseInt(numberChoice2.innerText) == guessedNumber )
            numberChoice2.style.backgroundColor = "green";
        else if ( parseInt(numberChoice3.innerText) == guessedNumber )
            numberChoice3.style.backgroundColor = "green";
}

function errorEvent(){
    message.innerText = "Que pena! Você não acertou. Tem mais " + String(tries) + " tentativas.";
    if ( parseInt(numberChoice1.innerText) == guessedNumber )
        numberChoice1.style.backgroundColor = "red";

    else if ( parseInt(numberChoice2.innerText) == guessedNumber )
        numberChoice2.style.backgroundColor = "red";

    else if ( parseInt(numberChoice3.innerText) == guessedNumber )
        numberChoice3.style.backgroundColor = "red";

}

function loseEvent(){
    message.innerText = `Que pena! Suas tentativas acabaram. O número correto era: ${String(correctChoice)}`;
    reset();
}





numberChoice1.addEventListener("click", function(){
    guessedNumber = parseInt(this.innerText);
    console.log(`Escolha número 1 = ${guessedNumber}`);
});
numberChoice2.addEventListener("click", function(){
    guessedNumber = parseInt(this.innerText);
    console.log(`Escolha número 2 = ${guessedNumber}`);
});
numberChoice3.addEventListener("click", function(){
    guessedNumber = parseInt(this.innerText);
    console.log(`Escolha número 3 = ${guessedNumber}`);
});

btnGuess.addEventListener("click", function(){
    if (guessedNumber == correctChoice)
        winEvent();
    else if (guessedNumber != correctChoice){
        tries--;
        loseEvent();
    }
    else errorEvent();
});