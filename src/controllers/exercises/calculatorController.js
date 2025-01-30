export function calculatorOperations(values, operation) {
  switch (operation) {
    case 'sumar':
      return values.reduce((total, num) => total + num, 0);
    case 'restar':
      return values.reduce((total, num) => total - num);
    case 'multiplicar':
      return values.reduce((total, num) => total * num, 1);
    case 'dividir':
      return values.reduce((total, num) => total / num);
    default:
      return 'Operación no válida';
  }
}
