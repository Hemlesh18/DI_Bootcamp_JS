const sentence = "The movie is not that bad, I like it.";
const wordNotPosition = sentence.indexOf("not");
console.log(wordNotPosition);
const wordsBadPosition = sentence.indexOf("bad")+3
console.log(wordsBadPosition);
if (wordNotPosition < wordsBadPosition){
    let result = sentence.substring(wordNotPosition,wordsBadPosition)
    let newSentence = sentence.replace(result,"good")
    console.log(newSentence);

}
else{
    console.log(sentence);
}

// method2
// let sentence1 = "The movie is not that bad, I like it";
// let wordNot = sentence1.indexOf("not");
// let wordBad = sentence1.indexOf("bad");

// if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
//   sentence1 = sentence1.slice(0, wordNot) + "good" + sentence1.slice(wordBad + 3);
// }

// console.log(sentence1);