import PropTypes from 'prop-types';

export const TextColumn = ({ text1, text2, text3 }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    text1: {
      color: '#a7a2a9',
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '25px',
    },
    text2: {
      color: ' #ffc800',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '25px',
    },
    text3: {
      color: ' #fff',
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '25px',
    },
  };

  return (
    <div style={styles.container}>
      {text1 && <span style={styles.text1}>{text1}</span>}
      {text2 && <span style={styles.text2}>{text2}</span>}
      {text3 && <span style={styles.text3}>{text3}</span>}
    </div>
  );
};

//  Props:
TextColumn.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
