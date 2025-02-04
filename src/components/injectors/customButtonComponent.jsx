import PropTypes from 'prop-types';
import { useState } from 'react';

export const CustomButtonComponent = ({
  onClick,
  label,
  hoverColor,
  clickColor,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover
  const [isClicked, setIsClicked] = useState(false); // Estado para controlar el click

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: 'var(--border-button)',
    backgroundColor: 'var(--color-mediumgray)',
    borderColor: isClicked
      ? clickColor
      : isHovered
        ? hoverColor
        : 'var(--color-mediumgray)', // Cambia el color al hacer hover o click
    color: isClicked ? 'var(--color-primary)' : 'var(--color-text)',
    cursor: 'pointer',
    ...style, // Sobrescribe o extiende los estilos base con los estilos personalizados
  };

  return (
    <button
      onClick={() => {
        onClick();
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 400);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
    >
      {label}
    </button>
  );
};

CustomButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  clickColor: PropTypes.string,
  style: PropTypes.object,
};

CustomButtonComponent.defaultProps = {
  hoverColor: 'var(--color-primary)', // Color de hover por defecto
  clickColor: 'var(--color-primary)', // Color de click por defecto
};
