import { HeaderDropdownMenu } from './HeaderDropdownMenu';
import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';
import './Header.css';

export const Header = () => {
  return (
    <nav className="headerContainer">
      <HeaderLogo />
      <HeaderLinks />
      <HeaderDropdownMenu />
    </nav>
  );
};
