import { useState } from 'react';
import {
  sumar,
  restar,
  multiplicar,
  dividir,
} from '../../../controllers/exercises/calculatorController';
import { CustomButtonComponent } from '../../injectors/customButtonComponent';
import { DynamicInputsComponent } from '../../injectors/dynamicInputsComponent';
import './CalculatorLayout.css';

export const CalculatorLayout = () => {
  const [values, setValues] = useState(['', '']); // Dos inputs predeterminados
  const [resultado, setResultado] = useState('');

  // Función para manejar el cambio en los inputs
  const handleInputChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  // Función para agregar un nuevo input
  const handleAddInput = () => {
    setValues([...values, '']);
  };

  // Función para eliminar el último input
  const handleRemoveInput = () => {
    if (values.length > 2) {
      const newValues = values.slice(0, -1); // Elimina el último elemento
      setValues(newValues);
    }
  };

  // Función para convertir los valores en un array de números
  const obtenerNumeros = () => {
    return values.map((value) => parseFloat(value) || 0); // Si el valor no es un número, se usa 0
  };

  // Funciones para manejar las operaciones
  const handleSumar = () => {
    const numeros = obtenerNumeros();
    setResultado(sumar(numeros));
  };

  const handleRestar = () => {
    const numeros = obtenerNumeros();
    setResultado(restar(numeros));
  };

  const handleMultiplicar = () => {
    const numeros = obtenerNumeros();
    setResultado(multiplicar(numeros));
  };

  const handleDividir = () => {
    const numeros = obtenerNumeros();
    setResultado(dividir(numeros));
  };

  return (
    <div className="calculatorContainer">
      <div className="calculatorInputs">
        <DynamicInputsComponent
          values={values}
          onAddInput={handleAddInput}
          onRemoveInput={handleRemoveInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="calculatorButtons">
        <CustomButtonComponent onClick={handleSumar} label="Sumar" />
        <CustomButtonComponent onClick={handleRestar} label="Restar" />
        <CustomButtonComponent
          onClick={handleMultiplicar}
          label="Multiplicar"
        />
        <CustomButtonComponent onClick={handleDividir} label="Dividir" />
      </div>

      <div className="calculatorResult">Resultado: {resultado}</div>
    </div>
  );
};
