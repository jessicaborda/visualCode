import PropTypes from 'prop-types';

export const InfoRowComponent = ({ title, data }) => {
  const styles = {
    row: { margin: '8px 0' },
    title: { fontWeight: 'bold', color: '#ffc800' },
    data: { fontWeight: '300', color: '#fff' },
  };

  return (
    <div style={styles.row}>
      <span style={styles.title}>{title}:</span>{' '}
      <span style={styles.data}>{data}</span>
    </div>
  );
};

//  Props:
InfoRowComponent.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string,
};
