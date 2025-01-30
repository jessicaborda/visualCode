export function extractNumbersController(text) {
  // p3rr1t0
  let letters = Array.from(text);

  let numbers = [];
  let numbersV2 = '';
  for (let letter of letters) {
    letter = parseInt(letter);
    if (!Number.isNaN(letter)) {
      let number = letter;
      numbers.push(number);
      numbersV2 = numbersV2 + number;
    }
  }
  console.log(numbers.toString());
  console.log(numbers.join());
  console.log(numbersV2);
  return numbersV2; // 310
}
