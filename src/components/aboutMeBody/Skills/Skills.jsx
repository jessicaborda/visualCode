import './Skills.css';
import { IconComponent } from '../../injectors/iconComponent';

export const Skills = () => {
  const styles = {
    width: '5vw',
    height: 'auto',
  };

  return (
    <>
      <div className="skillsContainer">
        <h2>Skills</h2>
        <p className="skillsDescription">
          Durante mi transición al desarrollo web, he aprendido a usar
          tecnologías como React, JavaScript, HTML, CSS, y Figma, con el
          objetivo de diseñar interfaces digitales que no solo sean visualmente
          atractivas, sino también funcionales y fáciles de usar. Mi enfoque
          está siempre en la experiencia del usuario, aplicando principios de
          diseño que aprendí en la arquitectura y adaptándolos al mundo digital.
        </p>

        <div className="skillsIcons">
          <IconComponent
            iconPath="/assets/about/icon_html.svg"
            altText="htmlIcon"
            title="HTML"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_css.svg"
            altText="cssIcon"
            title="CSS"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_javascript.svg"
            altText="javascriptIcon"
            title="JavaScript"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_react.svg"
            altText="reactIcon"
            title="React"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_figma.svg"
            altText="figmaIcon"
            title="Figma"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_sketchup.svg"
            altText="figmaIcon"
            title="SketchUp"
            style={styles}
          />

          <IconComponent
            iconPath="/assets/about/icon_autocad.svg"
            altText="figmaIcon"
            title="AutoCAD"
            style={styles}
          />
        </div>
      </div>
    </>
  );
};
