//variables
// var wordChosen
var wordLength
var wins = 0
var losses = 0
var guesses = 7
var userGuess

// Table array for word guesses//
var keyWords = ["stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "wanda", "ultron", "thanos", "lang", "hope", "strange"];
console.log(keyWords);

// Generate random word to guess//
// wordChosen = [Math.floor(Math.random(keyWords) * keyWords.length)];
const wordChosen = keyWords[Math.floor(Math.random() * keyWords.length)];

console.log(wordChosen);

