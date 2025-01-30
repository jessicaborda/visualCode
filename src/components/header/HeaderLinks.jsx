import { Link } from 'react-router';

export const HeaderLinks = () => {
  return (
    <div className="navbarLinks">
      <Link to="/about">About Me</Link>
      <a href="#">Documentación</a>
    </div>
  );
};
