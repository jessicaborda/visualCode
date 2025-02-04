import PropTypes from 'prop-types';
import { useState } from 'react';

export const DynamicInputsComponent = ({
  values,
  onAddInput,
  onRemoveInput,
  onChange,
}) => {
  const [isAddHovered, setIsAddHovered] = useState(false); // Estado para el botón "Agregar"
  const [isRemoveHovered, setIsRemoveHovered] = useState(false); // Estado para el botón "Eliminar"

  const containerStyle = {
    display: 'flex', // Usar Flexbox
    alignItems: 'center', // Alinear verticalmente al centro
    margin: '20px 0',
  };

  const inputStyle = {
    width: '100px',
    height: '100px',
    padding: '10px',
    margin: '20px',
    borderRadius: 'var(--border-normal)',
    border: '1px solid var(--color-lightgray)',
    backgroundColor: 'var(--color-mediumgray)',
    color: 'white',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 15px',
    margin: '20px',
    borderRadius: 'var(--border-button',
    border: '1px solid var(--color-lightgray)',
    backgroundColor: isAddHovered
      ? 'var(--color-lightgray)'
      : 'var(--color-mediumgray)', // Cambia el color de fondo al hacer hover
    borderColor: isAddHovered
      ? 'var(--color-primary)'
      : 'var(--color-lightgray)',
    color: isAddHovered ? 'var(--color-primary)' : 'var(--color-text)',
    cursor: 'pointer',
  };

  const buttonDangerStyle = {
    padding: '10px 15px',
    margin: '20px',
    borderRadius: 'var(--border-button',
    border: '1px solid var(--color-lightgray)',
    backgroundColor: isRemoveHovered
      ? 'var(--color-lightgray)'
      : 'var(--color-mediumgray)', // Cambia el color de fondo al hacer hover
    borderColor: isRemoveHovered
      ? 'var(--color-primary)'
      : 'var(--color-lightgray)',
    color: isRemoveHovered ? 'var(--color-primary)' : 'var(--color-text)',
  };

  return (
    <div style={containerStyle}>
      {values.map((value, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            placeholder={`Número`}
            style={inputStyle}
          />
        </div>
      ))}
      <div>
        <button
          onClick={onAddInput}
          style={buttonStyle}
          onMouseEnter={() => setIsAddHovered(true)} // Cambia el estado al entrar el mouse
          onMouseLeave={() => setIsAddHovered(false)} // Restaura el estado al salir el mouse
        >
          Agregar
        </button>
        {values.length > 2 && (
          <button
            onClick={onRemoveInput}
            style={buttonDangerStyle}
            onMouseEnter={() => setIsRemoveHovered(true)} // Cambia el estado al entrar el mouse
            onMouseLeave={() => setIsRemoveHovered(false)} // Restaura el estado al salir el mouse
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

DynamicInputsComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddInput: PropTypes.func.isRequired,
  onRemoveInput: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
