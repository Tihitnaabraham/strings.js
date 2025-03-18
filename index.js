let word = "extravaganza";
let lastWord = word.slice(-4);
console.log(lastWord);


let sentence = "The quick fox jumped over the lazy dog";
let insertWord = "eat";
let newSentence = sentence.slice(0,4)+word+sentence.slice(4);
console.log(newSentence);

const story = "The quick brown fox jumps over the lazy dog";
const countOccurrences = (str, target) => {
  let count = 0;
  let index = 0;
  while ((index = str.toLowerCase().indexOf(target.toLowerCase(), index)) !== -1) {
    count++;
    index += target.length;
  }
  return count;
};
const Count = countOccurrences(story, "the");
const brownCount = countOccurrences(story, "brown");
console.log("Count of 'the':", Count);
console.log("Count of 'brown':", brownCount);
const sentenceA = "The pupils are reading in the library";
const sentenceB = "The child was sitting on the table before it fell";
const findWord = (str, target) => {
  if (str.toLowerCase().includes(target.toLowerCase())) {
    return target;
  } else {
    return null;
  }
};
const theWord = findWord(sentenceA, "the");
const sittingWord = findWord(sentenceB, "sitting");
console.log("Found 'are':", theWord);
console.log("Found 'sitting':", sittingWord);
const adjA = "wonderful";
const adjB = "amazing";
const adjC = "UndERneath";
const sentences = "A wonderful world";
const upperCaseadjA= adjA.toUpperCase();
const lowerCaseadjB = adjB.toLowerCase();
const lowerCaseadjC = adjC.toLowerCase();
const titleCasePhrase = sentences
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("UpperCase:", upperCaseadjA);
console.log("LowerCase amazing:", lowerCaseadjB);
console.log("LowerCase UndERneath:", lowerCaseadjC);
console.log("Title Case:", titleCasePhrase);
