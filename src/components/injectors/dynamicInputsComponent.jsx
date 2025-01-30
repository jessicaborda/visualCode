import PropTypes from 'prop-types';

export const DynamicInputsComponent = ({
  values,
  onAddInput,
  onRemoveInput,
  onChange,
}) => {
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
    border: '1px solid var(--color-primary)',
    backgroundColor: 'var(--color-darkgray)',
    color: 'white',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 15px',
    margin: '20px',
    borderRadius: 'var(--border-button',
    border: 'solid 1.5px var(--color-primary)',
    backgroundColor: 'var(--color-darkgray)',
    color: 'var(--color-primary)',
    cursor: 'pointer',
  };

  const buttonDangerStyle = {
    ...buttonStyle, // Hereda los estilos de buttonStyle
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
        <button onClick={onAddInput} style={buttonStyle}>
          Agregar
        </button>
        {values.length > 2 && (
          <button onClick={onRemoveInput} style={buttonDangerStyle}>
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
