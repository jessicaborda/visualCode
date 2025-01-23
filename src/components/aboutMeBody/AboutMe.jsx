import { InfoRowComponent } from '../infoRowComponent';
import './styles/AboutMe.css';

export const AboutMe = () => {
  return (
    <>
      <div className="aboutMeContainer">
        <h1>Jessica Borda</h1>
        <h3>Frontend Developer / UX Designer / Architect</h3>
        <p>
          ¡Hola! Mi nombre es Jessica Borda, soy arquitecta civil de profesión,
          por lo cual mi verdadera pasión siempre ha sido el diseño. A lo largo
          de mi carrera, he desarrollado una fuerte afinidad por la creación de
          espacios y soluciones que mejoren la experiencia de las personas. Esta
          pasión me ha llevado a adentrarme en el mundo del desarrollo de
          software y el diseño UX, donde puedo combinar mi formación técnica con
          mi amor por el diseño centrado en el usuario.
        </p>
        <h3>Información Personal</h3>
        <div className="infoRowContainer">
          <div>
            <InfoRowComponent title="Nombre" data="Jessica Tatiana" />
            <InfoRowComponent title="Edad" data="23 años" />
            <InfoRowComponent title="Email" data="jessi.borda09@gmail.com" />
          </div>
          <div>
            <InfoRowComponent title="Apellidos" data="Borda Molina" />
            <InfoRowComponent title="País" data="Colombia" />
            <InfoRowComponent title="Ubicación" data="Tunja, Boyacá" />
          </div>
        </div>
        <button>Descargar CV</button>
      </div>
    </>
  );
};
