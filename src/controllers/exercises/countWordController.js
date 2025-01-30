export function countWordController(text) {
  // Pedir al usuario la palabra objetivo
  let targetWord = prompt('Ingresa la palabra objetivo:');

  // Contar cuántas veces aparece cada letra del texto
  let textLetterCounts = {};
  for (let char of text) {
    if (targetWord.includes(char)) {
      textLetterCounts[char] = (textLetterCounts[char] || 0) + 1;
    }
  }

  // Contar cuántas veces aparece cada letra en la palabra objetivo
  let targetWordLetterCounts = {};
  for (let char of targetWord) {
    targetWordLetterCounts[char] = (targetWordLetterCounts[char] || 0) + 1;
  }

  // Crear un array con las veces que se puede usar cada letra
  let occurrencesPerLetter = [];
  for (let char in targetWordLetterCounts) {
    let available = textLetterCounts[char] || 0; // Cantidad disponible en el texto
    let required = targetWordLetterCounts[char]; // Cantidad requerida por la palabra
    occurrencesPerLetter.push(Math.floor(available / required)); // Veces que se puede usar esa letra
  }

  // El resultado es el menor número en el array
  return Math.min(...occurrencesPerLetter);
}
