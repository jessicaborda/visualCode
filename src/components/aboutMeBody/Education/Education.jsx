import { TextColumn } from '../../injectors/textColumn.jsx';
import './Education.css';

export const Education = () => {
  return (
    <>
      <div className="experience-educationContainer">
        <div className="experienceContainer">
          <h2>Experiencia</h2>
          <div className="experienceItems">
            <TextColumn
              text1="2024"
              text2="Pasante de Arquitectura"
              text3="Secretaría de Cultura y Patrimonio de Boyacá"
            />
            <br />

            <TextColumn
              text1="2024"
              text2="Emprendimiento Diseño de Interiores y Arte"
              text3="ArsDesign (Proyecto Personal)"
            />
            <br />
            <TextColumn
              text1="2024 - 2025"
              text2="Proyectos Personales Desarrollo de Software"
              text3="He trabajado en proyectos personales donde he aplicado mis habilidades de desarrollo frontend y diseño UX para crear sitios web, y soluciones digitales que sean visualmente atractivas y funcionales."
            />
          </div>
        </div>

        <div className="divider"></div>

        <div className="educationContainer">
          <h2>Educación</h2>
          <div className="educationItems">
            <TextColumn
              text1="2019 - 2024"
              text2="Arquitecta"
              text3="Universidad Pedagógica y Tecnológica de Colombia"
            />
            <br />
            <TextColumn
              text1="2024 - 2025"
              text2="Programación para Principiantes"
              text3="Educación Autodidacta (Cursos Online)"
            />
            <br />
            <TextColumn
              text2="Curso de HTML5"
              text3="Educación Autodidacta (Cursos Online)"
            />
            <br />
            <TextColumn
              text2="JavaScript de Cero a Programador Web"
              text3="Educación Autodidacta (Cursos Online)"
            />
            <br />
            <TextColumn
              text2="Curso CSS3"
              text3="Educación Autodidacta (Cursos Online)"
            />
            <br />
            <TextColumn
              text2="React de Cero a Experto"
              text3="Educación Autodidacta (Cursos Online)"
            />
            <br />
            <TextColumn
              text2="Diseño UX/UI + Figma 2025"
              text3="Educación Autodidacta (Cursos Online)"
            />
          </div>
        </div>
      </div>
    </>
  );
};
