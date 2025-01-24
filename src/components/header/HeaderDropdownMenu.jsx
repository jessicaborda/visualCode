import { IconComponent } from '../iconComponent';

export const HeaderDropdownMenu = () => {
  const styles = {
    width: '50px',
    height: '50px',
  };

  return (
    <>
      <div className="dropdownMenu">
        <IconComponent
          iconPath="public/assets/about/burgerMenuIcon.svg"
          altText="menuIcon"
          style={styles}
        />
      </div>
    </>
  );
};
