import { NavLink } from 'react-router';
import './Header.css';

export const HeaderLinks = () => {
  return (
    <div className="navbarLinks">
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'activeLink' : '')}
      >
        About Me
      </NavLink>
      <a
        href="https://www.figma.com/board/wL5UUFwLBWrDUZpP7Mn4hS/TemplateFigjam?node-id=0-1&t=UFQX8qHKYkxozIpZ-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>
    </div>
  );
};
