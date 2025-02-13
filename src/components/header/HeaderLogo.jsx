import { Link } from 'react-router';
import './Header.css';

export const HeaderLogo = () => {
  return (
    <div className="navbarLogo">
      <Link to="/">
        <img src="/assets/about/navbarLogo.png" alt="navbarLogo" />
      </Link>
    </div>
  );
};
