// First Exercise
const reversedNum = num => num.toString().split('').reverse().join('');
console.log(reversedNum(349210));

//Second Exercise
const sortedStr = text => text.split('').sort().join('');
console.log(sortedStr("webmaster"));

//Third Exercise
const capitalizer = (sentence) => sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizer("the quick brown fox"));

//Fourth Exercise
function primeNumber(number) {
    if (number === 2) {
      return "Number is prime!";
    } else if (number > 1) {
      for (var i = 2; i < number; i++) {
        if (number % i !== 0) {
          return "Number is prime!";
        } else if (number === i * i) {
          return "Number isn't prime!";
        } else {
          return "Number isn't prime!";
        }
      }
    } else {
      return "Number isn't prime!";
    }
  }
  console.log(primeNumber(5));
  console.log(primeNumber(8));
  
//Fifth Exercise
function characterSearch(toBeSearched) {
  let str = toBeSearched;
  let searchedChar = "";
  for (let i = 0; i < str.length; i++) {
    if (searchedChar.indexOf(str.charAt(i)) == -1) {
      searchedChar += str[i];
    }
  }
  return searchedChar;
}
console.log(characterSearch("thequickbrownfoxjumpsoverthelazydog"));

//Another Function for Test Assignment.

function likePicture(callback, picture) {
  if (picture !== 'food') {
    callback(picture);
  }
}




module.exports.reversedNum = reversedNum;
module.exports.capitalizer = capitalizer;
module.exports.sortedStr = sortedStr;
module.exports.likePicture = likePicture;
module.exports.primeNumber = primeNumber;