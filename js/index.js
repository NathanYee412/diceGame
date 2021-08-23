
// Get a random number between 0 and 6
function getRandomNum() {
    
    let randomNumber1 = Math.floor(Math.random() * 6);
    return randomNumber1;

}


// create an array of image paths
let picArr = ["/img/dice1.png", "/img/dice2.png", "/img/dice3.png", "/img/dice4.png", "/img/dice5.png", "/img/dice6.png"]


// change img 
function getRandomDice(diceNum) {

    let leftNum = getRandomNum();
    let rightNum = getRandomNum();

    document.getElementById("left").src=picArr[leftNum];
    document.getElementById("right").src=picArr[rightNum];

    if(leftNum > rightNum) {
        document.getElementById("title-text").innerHTML = "Player 1 Wins!";
    } else if(rightNum > leftNum) {
        document.getElementById("title-text").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("title-text").innerHTML = "It is a Draw!";
    }

}



getRandomDice();