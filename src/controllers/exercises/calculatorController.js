export const sumar = (numeros) => {
  return numeros.reduce((total, num) => total + num, 0);
};

export const restar = (numeros) => {
  return numeros.reduce((total, num) => total - num);
};

export const multiplicar = (numeros) => {
  return numeros.reduce((total, num) => total * num, 1);
};

export const dividir = (numeros) => {
  return numeros.reduce((total, num) => total / num);
};
