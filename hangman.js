prompt("Press Any Key To Get Started");

//variables
var words = ["dothraki", "jon snow", "nightwatch", "winterfell", "ned stark", "tyrion", 
             "daenerys", "dragonglass", "cersei", "joffrey", "viserys", "rhaegar", "khal drogo", 
             "winter is coming", "westeros", "direwolf", "white walkers", "dorne", "lannister",
             "wildlings", "targaryen", "kings landing" ];
const maxGuesses = 7; // amount of guesses a player has        
var guessedLetters = []; //stores letters user guessed
var currentWordIndex;  //index of current word in words array
var wordGuess = [];  //word built to current word
var remainingGuesses = 0; //guesses a player has left
var gameFinished= false; //initializes "press any key"
var wins= 0; //correctly guessed words


//game sounds
var winSound = new Audio('./Hangman Assets/got_s2e10_dracarys.wav');
var loseSound = new Audio('./Hangman Assets/You Know Nothing Jon Snow Part 1.wav');
var typingSound = new Audio('./Hangman Assets/typewriter-key-1.wav');

//change button color to show chosen letters
$(document).ready(function() {
    
    for (var i = 0; i < letters.length; i++){
        var letterBtn = $("<button>");  
        letterBtn.addClass("letter-button letter letter-button-color"); 
        letterBtn.attr("data-letter", letters[i]);  
        letterBtn.text(letters[i]);  
        $("#buttons").append(letterBtn);  
    } 
function resetGame(){
    remainingGuesses  = maxGuesses;
}

var word = words[Math.floor(Math.random()*(words.length))];
var s;

function startGame(){
for (var i = 0; i <word[currentWordIndex].length; i++){
    wordGuess[i] = "_";
}
}
function endGame(){
    if(maxGuesses<1){
        resetGame();
    }
};


