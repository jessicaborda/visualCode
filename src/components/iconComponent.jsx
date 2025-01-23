import PropTypes from 'prop-types';

export const IconComponent = ({
  iconPath,
  altText = 'icon',
  title = '',
  style = {},
}) => {
  if (!iconPath) {
    return <div>Icon path not provided</div>; // Fallback en caso de que no se pase un ícono
  }

  const defaultStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src={iconPath}
        alt={altText}
        title={title} // Añade el título aquí
        style={{ ...defaultStyle, ...style }} // Combina estilos predeterminados con los proporcionados
      />
      {title && (
        <span
          style={{
            marginTop: '8px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          {title}
        </span>
      )}{' '}
      {/* Muestra el título si está presente */}
    </div>
  );
};

// Props:
IconComponent.propTypes = {
  iconPath: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};
