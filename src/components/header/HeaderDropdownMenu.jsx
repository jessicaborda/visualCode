import { useState } from 'react';
import { DropDownMenu } from '../dropDownMenu/DropDownMenu';
import { IconComponent } from '../injectors/iconComponent';

export const HeaderDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    width: '80%',
    height: 'auto',
  };

  return (
    <>
      <div className="menuIcon" onClick={toggleMenu}>
        <IconComponent
          iconPath="/assets/about/burgerMenuIcon.svg"
          altText="menuIcon"
          style={styles}
        />
      </div>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className={`dropdown-menu ${isOpen ? 'active' : ''}`}
        >
          <DropDownMenu />
        </div>
      )}
    </>
  );
};
