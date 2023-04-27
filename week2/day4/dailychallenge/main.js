const words = prompt("Type several words (separated by commas).").split(",");
let maxWordLength = 0;

words.forEach(function(word) {
  if (word.length > maxWordLength) {
    maxWordLength = word.length;
  }
});

console.log("*".repeat(maxWordLength + 4));

words.forEach(function(word) {
  let spaces = " ".repeat(maxWordLength - word.length);
  console.log("* " + word + spaces + " *");
});

console.log("*".repeat(maxWordLength + 4));
