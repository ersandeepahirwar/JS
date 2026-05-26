/* 

Write a JavaScript program to check whether an entered character is
a lowercase vowel, lowercase consonant, uppercase vowel, uppercase consonant, digit, space, or special character.

*/

const character = prompt("What character do you want to check?");

if (character.length > 1) {
  alert("You entered an Invalid Character");
} else {
  if (character >= "a" && character <= "z") {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      alert(`"${character}" is a Lowercase vowel`);
    } else {
      alert(`"${character}" is a Lowercase Consonant`);
    }
  } else if (character >= "A" && character <= "Z") {
    if (
      character === "A" ||
      character === "E" ||
      character === "I" ||
      character === "O" ||
      character === "U"
    ) {
      alert(`"${character}" is an Uppercase Vowel`);
    } else {
      alert(`"${character}" is an Uppercase Consonant`);
    }
  } else if (character >= "0" && character <= "9") {
    alert(`"${character}" is a digit`);
  } else if (character === " ") {
    alert(`"${character}" is a Space`);
  } else {
    alert(`"${character}" is a Special Character`);
  }
}
