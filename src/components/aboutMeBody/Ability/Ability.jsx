import './Ability.css';
import { CardComponent } from '../../injectors/cardComponent';

export const Ability = () => {
  const cardStyle = {
    backgroundColor: 'var(--color-lightgray)',
    padding: '10px',
  };

  const iconStyle = {
    width: '63px',
    height: '63px',
  };

  const titleStyle = {
    color: '#ffc800',
    fontSize: '20px',
    lineHeight: '1.0',
  };

  const descriptionStyle = {
    color: '#fff',
    lineHeight: '1.5',
    width: '230px',
    height: 'auto',
    top: '0',
  };

  return (
    <>
      <div className="abilityContainer">
        <h2>Habilidades</h2>
        <div className="cardsContainer">
          <CardComponent
            iconPath="../../../assets/about/icon_code.svg"
            title="Desarrollo Frontend"
            description="En mi proceso de aprendizaje he trabajando con tecnologías clave como HTML, CSS, JavaScript y React, lo que me permitecrear interfaces web interactivas, dinámicas y visualmente atractivas. Mi enfoque se centra en escribir código limpio, eficiente y fácil de mantener, siempre con una atención especial al rendimiento y la accesibilidad."
            style={cardStyle}
            iconStyle={iconStyle}
            titleStyle={titleStyle}
            descriptionStyle={descriptionStyle}
          />

          <CardComponent
            iconPath="../../../assets/about/icon_code_laptop.svg"
            title="Diseño UX/UI"
            description="Como UX Designer, aplico principios de diseño centrado en el usuario para crear experiencias digitales intuitivas y funcionales. Utilizo herramientas como Figma para diseñar prototipos y realizar pruebas de usabilidad, garantizando que cada diseño no solo sea estéticamente agradable, sino también fácil de usar y adaptado a las necesidades del usuario."
            style={cardStyle}
            iconStyle={iconStyle}
            titleStyle={titleStyle}
            descriptionStyle={descriptionStyle}
          />

          <CardComponent
            iconPath="../../../assets/about/icon_design.svg"
            title="Arquitectura"
            description="Mi formación como arquitecta me ha enseñado a equilibrar la estética con la funcionalidad, a planificar, estructurar y prestar atención a los aspectos técnicos de los proyectos, lo cual me ha permitido trasladar esas habilidades al desarrollo de interfaces web, creando experiencias que no solo sean visualmente atractivas, sino también prácticas y funcionales."
            style={cardStyle}
            iconStyle={iconStyle}
            titleStyle={titleStyle}
            descriptionStyle={descriptionStyle}
          />
        </div>
      </div>
    </>
  );
};
