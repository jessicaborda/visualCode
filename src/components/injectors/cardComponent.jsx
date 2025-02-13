import PropTypes from 'prop-types';
import { IconComponent } from './iconComponent';

export const CardComponent = ({
  iconPath,
  title,
  description,
  style = {},
  iconStyle = {},
  titleStyle = {},
  descriptionStyle = {},
}) => {
  const defaultStyle = {
    card: {
      borderRadius: '15px',
      width: '273px',
      height: 'min-content',
      textAlign: 'center',
      backgroundColor: 'var(--color-lightgray)',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      paddingTop: '20px',
    },
    description: {
      fontSize: '14px',
      padding: '20px',
      color: '#555',
      textAlign: 'left',
    },
  };
  return (
    <div style={{ ...defaultStyle.card, ...style }}>
      {iconPath && (
        <IconComponent
          iconPath={iconPath}
          altText={title}
          style={{ width: '50px', height: '50px', ...iconStyle }}
        />
      )}
      <h3 style={{ ...defaultStyle.title, ...titleStyle }}>{title}</h3>
      <p style={{ ...defaultStyle.description, ...descriptionStyle }}>
        {description}
      </p>
    </div>
  );
};

// Props:
CardComponent.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
};
