function isPalindrome(word) {
  

  const wordString = word.split('');

  const wordReverse = wordString.reverse();
   const wordJoin = wordReverse.join('')

   if(word === wordJoin){
     return true
   }
   else{
    return false
   }
  // Write your algorithm here
}




/* 
  Add your pseudocode here
  declare the variable taking one argument
  convert to an array
  reverse the array
  change it back to string
  compare the original string and the reversed string
  return results
  
*/


/*
  Add written explanation of your solution here
  declare isPalindrome variable that takes string as an argument
  change the string into an array using split('')
  Reverse the array using reverse()
  change the array back to srtring using join('')
  use if statement to determine if the original string and the reversed string are equal using ===
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
