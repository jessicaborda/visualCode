import PropTypes from 'prop-types';

export const DropDownItems = ({ label, href }) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};

DropDownItems.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
