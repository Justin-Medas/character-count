/**
 * @file
 * Count a string of Characters
 * A utility function for organzing and counting alpha numeric characters
 * Create an object where the key is the character and the value is the number of times it appears
 */

 /**
  * @param {string} str
  */
export function charCount(str) {
  let obj = {}
  for (let char of str) {
    // check if alpha numeric
    if (isAlphaNumeric(char)) {
      char = char.toLocaleLowerCase();
      // Check if the charcter is set in the object, add an entry or add up by 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

 /**
  * @param {string} str
  */
export function SpecialCharCount(str) {
  let obj = {}
  for (let char of str) {
    // check if alpha numeric
    if (isSpecial(char)) {
      char = char.toLocaleLowerCase();
      // Check if the charcter is set in the object, add an entry or add up by 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

 /**
  * A function to determine alpha numeric values
  * 
  * @param {character} string a sinlge character as a string
  */
function isAlphaNumeric(char) {
  // We use charCodeAt because of the performance benefit over using RegEx
  let code = char.charCodeAt(0);

  // If any charachter is not numeric, or upper/lower alpha, we return false
  if (!(code > 47 && code < 58) && // Numeric (0-9)
      !(code > 64 && code < 91) && // Upper Alpha A-Z
      !(code > 96 && code < 123)) { // lower Alpha a-z
        return false;
    }
  return true
}

 /**
  * A function to determine special character values
  * 
  * @param {character} string a sinlge character as a string
  */
function isSpecial(char) {
  // We use charCodeAt because of the performance benefit over using RegEx
  let code = char.charCodeAt(0);

  // If any charachter is numeric, or upper/lower alpha, we return false
  if (!(code > 47 && code < 58) && // Numeric (0-9)
      !(code > 64 && code < 91) && // Upper Alpha A-Z
      !(code > 96 && code < 123)) { // lower Alpha a-z
        return true;
    }
  return false
}