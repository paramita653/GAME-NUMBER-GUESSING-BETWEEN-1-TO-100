let number = Math.floor((Math.random() * 100) + 1);
let guessNum = 0;
let chances = 0;
do {
    chances +=1;
    guessNum = parseInt(prompt("Enter the guess : "));
    if (guessNum > number) {
        alert("Your guess is greater than the original number!");
    }
    else if (guessNum < number) {
        alert("Your guess is smaller than the original number!");
    }
    else {
        alert("Your guess is correct");
    }
} while (number != guessNum);
    
alert("Your Final Score Is : " + (100-chances+1));
console.log("The actual number is : " + number);
