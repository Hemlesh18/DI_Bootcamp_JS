const sentence = "The movie is not that bad, I like it.";
const wordNotPosition = sentence.indexOf("not");
console.log(wordNotPosition);
const wordsBadPosition = sentence.indexOf("bad")+3
console.log(wordsBadPosition);
let result = sentence.substring(wordNotPosition,wordsBadPosition)
console.log(result);
let newSentence = sentence.replace(result,"good")
console.log(newSentence);