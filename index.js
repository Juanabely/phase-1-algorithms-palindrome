function isPalindrome(word) {
  // Write your algorithm here
  //creates an array from word
  const array = [...word];
  // creates a new array to store word letters
  let newArray = [];
  //itterates through the array in reverse and pushes it into new array
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  const reversedWord = newArray.join('');
  if (reversedWord=== word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
i first create an array from the word put in
i then itterate through the array in reverse
i then push the reversed array into the new array variable
i then use the join method to make it a string again
then do a conditional statement to check if the word and the reversed word match
*/

/*
  Add written explanation of your solution here
  There is first a function that holds the parameter word which will get an argument later with a word we want to check if it is a palindrome(spells same way from left to right and vice versa)
  Inside the function i now create the array from the word 
  After the loop  of the array and reversing the word ill now store that array in a new array
  ill change the new array into a string and then check if the first word and the new word match to give me a true
  and if it wont match to give me a false to mean it cant be spelled same way from left to right and right to left
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

    console.log("true");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
