/**
 * Remove special characters, replace spaces with hyphens, and make all characters lowercase
 * @param {string} text
 * the text that should be beautified
 */

 export function cleanLabel(text) {
  let cleanString = text.toString().toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
  return cleanString;
}