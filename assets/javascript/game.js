//variables
// var wordChosen
var wordLength
var wins = 0
var losses = 0
var guesses = 7
var userGuess

// Table array for word guesses//
var keyWords = ["tchalla", "stark", "banner", "thor", "rodgers", "groot", "parker", "vision", "fury", "avengers", "marvel", "barton", "romanoff", "barnes", "loki", "quill", "gamora", "rocket", "drax", "wanda", "ultron", "thanos", "lang", "hope", "strange"];
console.log(keyWords);

// Generate random word to guess//
const wordChosen = keyWords[Math.floor(Math.random() * keyWords.length)];
console.log(wordChosen);

wordDisplayed = #blankSpaces

//Push the _ for the word variable//
for (var i = 0; i < keyWords[wordChosen].length; i++) {
  wordDisplayed.push("_");
}
