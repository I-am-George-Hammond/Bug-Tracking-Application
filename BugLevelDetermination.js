//Willem Engelbrecht

//Determination of bug level 

//Recieve user input
//input 1: rate the effect of the bug out of 10
//input 2: did the bug make the webpage crash? y/n? 
let Crash = false;
let Rating = 7;

function DetermineBugLevel(Rating, Crash) {
    let level
    if (Crash === true) {
        level = 'High';
    }
    else if (Rating >= 6) {
        level = 'Intermediate'
    }
    else if (Rating <= 5) {
        level = 'Low'
    }
    return level;
}

//test

console.log(DetermineBugLevel(Rating, Crash));