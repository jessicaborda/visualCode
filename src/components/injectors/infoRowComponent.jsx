import PropTypes from 'prop-types';

export const InfoRowComponent = ({ title, data }) => {
  const styles = {
    row: { margin: '8px 0' },
    title: { fontWeight: 'bold', color: 'var(--color-primary)' },
    data: { fontWeight: '300', color: 'var(--color-text)' },
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
