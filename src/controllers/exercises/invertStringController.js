export function invertStringController(text) {
  let arrayLetters = [];
  let newText = '';

  let letters = Array.from(text); // Transformar el texto en array

  for (let char of letters) {
    // Invertir el array
    arrayLetters.unshift(char);
  }

  for (let char of arrayLetters) {
    // Unir el nuevo array en un string
    newText += char;
  }
  return newText;
}
