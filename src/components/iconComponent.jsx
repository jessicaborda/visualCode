import React from 'react';

export const IconComponent = ({ iconPath, altText = 'icon', style = {} }) => {
  if (!iconPath) {
    return <div>Icon path not provided</div>; // Fallback en caso de que no se pase un ícono
  }

  const defaultStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <img 
      src={iconPath} 
      alt={altText} 
      style={{ ...defaultStyle, ...style }} // Combina estilos predeterminados con los proporcionados
    />
  );
};
