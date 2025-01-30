import PropTypes from 'prop-types';
import { useState } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';
import { CustomButtonComponent } from '../../injectors/customButtonComponent';
import { DynamicInputsComponent } from '../../injectors/dynamicInputsComponent';
import './CalculatorLayout.css';

export const CalculatorLayout = ({ handleFunction }) => {
  const [values, setValues] = useState(['', '']); // Dos inputs predeterminados
  const [result, setResult] = useState(''); // Estado para almacenar el resultado final

  // Función para convertir los valores en un array de números
  const obtenerNumeros = () => {
    return values.map((value) => parseFloat(value) || 0); // Si el valor no es un número, se usa 0
  };

  const handleResult = (operation) => {
    // TODO: Traer los input
    const values = obtenerNumeros();
    // TODO: Operar los inputs
    const result = handleFunction(values, operation);
    // TODO: Settear el resultado
    setResult(result);
  };

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

  const OPERATIONS = [
    {
      label: 'Sumar',
      operation: 'sumar',
    },
    {
      label: 'Restar',
      operation: 'restar',
    },
    {
      label: 'Multiplicar',
      operation: 'multiplicar',
    },
    {
      label: 'Dividir',
      operation: 'dividir',
    },
  ];

  return (
    <>
      <Header />
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
          {OPERATIONS.map((operation) => (
            <CustomButtonComponent
              key={operation.label}
              onClick={() => handleResult(operation.operation)}
              label={operation.label}
            />
          ))}
        </div>
        {/* 
      <div className="calculatorButtons">
        <CustomButtonComponent
          onClick={() => handleResult('sumar')}
          label="Sumar"
        />
        <CustomButtonComponent onClick={handleRestar} label="Restar" />
        <CustomButtonComponent
          onClick={handleMultiplicar}
          label="Multiplicar"
        />
        <CustomButtonComponent onClick={handleDividir} label="Dividir" />
      </div> */}

        <div className="calculatorResult">Resultado: {result}</div>
      </div>
      <Footer />
    </>
  );
};

CalculatorLayout.propTypes = {
  handleFunction: PropTypes.func.isRequired,
};
