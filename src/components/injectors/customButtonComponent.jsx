import PropTypes from 'prop-types';
import { useState } from 'react';

export const CustomButtonComponent = ({ onClick, label }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: 'var(--border-button)',
    border: 'solid 2px var(--color-primary)',
    backgroundColor: isHovered
      ? 'var(--color-darkgray)'
      : 'var(--color-lightgray)', // Cambia el color de fondo al hacer hover'
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)} // Cambia el estado al entrar el mouse
      onMouseLeave={() => setIsHovered(false)} // Restaura el estado al salir el mouse
    >
      {label}
    </button>
  );
};

CustomButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
