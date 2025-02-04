import PropTypes from 'prop-types';
import { useState } from 'react';
import { CustomButtonComponent } from './customButtonComponent';

export const DynamicDiceComponent = ({
  values,
  onAddDice,
  onRemoveDice,
  onChange,
}) => {
  const [numFaces, setNumFaces] = useState(6); // Estado para el número de caras del dado

  // Función para lanzar todos los dados al mismo tiempo
  const rollAllDice = () => {
    const newValues = values.map(
      () => Math.floor(Math.random() * numFaces) + 1
    );
    onChange(newValues); // Actualiza todos los valores de los dados
  };

  // Función para calcular la suma de los dados
  const calculateSum = () => {
    return values.reduce((acc, value) => acc + value, 0);
  };

  // Función para determinar qué mostrar en el dado según su valor
  const renderDiceContent = (value) => {
    const diceFaces = ['1', '2', '3', '4', '5', '6'];
    return value <= 6 ? diceFaces[value - 1] : value; // Muestra íconos para valores 1-6, números para >6
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <input
          type="number"
          placeholder="# Caras del dado"
          value={numFaces}
          onChange={(e) => setNumFaces(parseInt(e.target.value, 10))}
          min="2" // Mínimo 2 caras
          max="10" // Máximo 10 caras
          style={{
            width: '260px',
            height: '30px',
            padding: '10px',
            border: 'none',
            borderRadius: 'var(--border-normal)',
            backgroundColor: 'var(--color-mediumgray)',
            color: 'var(--color-text)',
            textAlign: 'center',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        {values.map((value, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              margin: '10px',
              borderRadius: 'var(--border-normal)',
              border: '1px solid var(--color-lightgray)',
              backgroundColor: 'var(--color-mediumgray)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '24px',
              cursor: 'pointer',
            }}
            onClick={() =>
              onChange(index, Math.floor(Math.random() * numFaces) + 1)
            }
          >
            {renderDiceContent(value)}
          </div>
        ))}
        <div>
          <CustomButtonComponent label="Agregar dado" onClick={onAddDice} />
          {values.length > 1 && (
            <CustomButtonComponent
              label="Eliminar dado"
              onClick={onRemoveDice}
            />
          )}
        </div>
      </div>
      <div>
        <CustomButtonComponent
          label="Lanzar Dados"
          onClick={rollAllDice}
          style={{ width: '280px', height: '50px' }}
        />
      </div>
      {/* Div para mostrar la suma de los dados */}
      <div
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'var(--color-mediumgray)',
          color: 'var(--color-text)',
          borderRadius: 'var(--border-normal)',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        {calculateSum()}
      </div>
    </div>
  );
};

DynamicDiceComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddDice: PropTypes.func.isRequired,
  onRemoveDice: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
