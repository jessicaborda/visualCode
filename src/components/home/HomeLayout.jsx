import { CardComponent } from '../injectors/cardComponent';
import './HomeLayout.css';

export const HomeLayout = () => {
  const cardStyle = {
    width: '320px',
    height: '433px',
    backgroundColor: 'var(--color-primary)',
    boxShadow: '30px 25px 25px #5d2e8c',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const titleStyle = {
    color: 'var(--color-secondary)',
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: '1.0',
    textAlign: 'left',
    padding: '150px 0 0 20px',
  };

  const iconStyle = {
    width: '63px',
    height: 'auto',
    paddingTop: '20px',
  };

  const descriptionStyle = {
    color: 'var(--color-darkgray)',
    backgroundColor: 'var(--color-lightgray)',
    fontWeight: 'medium',
    lineHeight: '1.5',
    width: '280px',
    height: '200px',
    fontSize: '24px',
    padding: '20px 20px',
    textAlign: 'left',
    marginTop: 'auto',
    borderRadius: '0 0 15px 15px',
  };
  return (
    <>
      <div className="homeContainer">
        <div className="descriptionContainer">
          <p className="descriptionItem">
            <span className="highlight">“VisualCode”</span> es una herramienta
            para la visualización de ejercicios en JavaScript y React, mediante
            un entorno interactivo y sencillo.
          </p>

          <div className="CardsContainer">
            <CardComponent
              iconPath=""
              title="Visualiza"
              description="Navega por los diferentes ejercicios de programación en JS y React."
              style={cardStyle}
              iconStyle={iconStyle}
              titleStyle={titleStyle}
              descriptionStyle={descriptionStyle}
            />
            <CardComponent
              iconPath=""
              title="Ejecuta"
              description="Interactúa con las funcionalidades que estos ejercicios te ofrecen."
              style={cardStyle}
              iconStyle={iconStyle}
              titleStyle={titleStyle}
              descriptionStyle={descriptionStyle}
            />
            <CardComponent
              iconPath=""
              title="Conoce"
              description="Conoce el proceso de diseño, desarrollo y evaluación de la herramienta."
              style={cardStyle}
              iconStyle={iconStyle}
              titleStyle={titleStyle}
              descriptionStyle={descriptionStyle}
            />
          </div>
        </div>
      </div>
    </>
  );
};
