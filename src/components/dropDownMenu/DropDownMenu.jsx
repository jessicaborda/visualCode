import { DropDownItems } from '../injectors/DropDownItems';
import { IconComponent } from '../injectors/iconComponent';
import { EXERCISES } from '../VisualController/exercisesConst';
import './DropDownMenu.css';

export const DropDownMenu = () => {
  const styles = {
    width: '25px',
    height: 'auto',
  };

  const dropDownItems = Object.keys(EXERCISES).map((key) => ({
    label: EXERCISES[key].name, // Usar el nombre del ejercicio
    href: '/visualCode/exercises' + EXERCISES[key].path, // Usar la ruta del ejercicio
  }));

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
