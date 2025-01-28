import { DropDownItems } from '../injectors/DropDownItems';
import { IconComponent } from '../injectors/iconComponent';
import './DropDownMenu.css';

export const DropDownMenu = () => {
  const styles = {
    width: '25px',
    height: 'auto',
  };

  const dropDownItems = [
    { label: 'Ejercicio 1', href: '/ejercicio1' },
    { label: 'Ejercicio 2', href: '/ejercicio2' },
    { label: 'Ejercicio 3', href: '/ejercicio3' },
    { label: 'Ejercicio 4', href: '/ejercicio4' },
    // Puedes añadir más ítems aquí
  ];

  return (
    <>
      <div className="dropDownContainer">
        <div className="dropDownMenu">
          <div className="CloseIcon">
            <IconComponent
              iconPath="/assets/header/icono_X.svg"
              altText="figmaIcon"
              style={styles}
            />
          </div>
          <ul>
            {/* Genera los ítems del menú dinámicamente */}
            {dropDownItems.map((item, index) => (
              <DropDownItems key={index} label={item.label} href={item.href} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
