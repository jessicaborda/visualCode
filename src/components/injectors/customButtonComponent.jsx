import PropTypes from 'prop-types';

export const CustomButtonComponent = ({ onClick, label }) => {
  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: 'var(--border-button)',
    border: 'solid 2px var(--color-primary)',
    backgroundColor: 'var(--color-lightgray)',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

CustomButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
