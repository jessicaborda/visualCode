import './Contact.css';
import { IconComponent } from '../../injectors/iconComponent';
import { SvgComponent } from '../../injectors/svgComponent.jsx';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    const mailtoLink = `mailto:jessi.borda09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0A${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input
        className="inputForm_name"
        type="text"
        placeholder="Tu nombre"
        required
      />
      <input
        className="inputForm_email"
        type="email"
        placeholder="Tu Correo"
        required
      />
      <input
        className="inputForm_asunto"
        type="text"
        placeholder="Asunto"
        required
      />
      <textarea
        className="inputForm_message"
        placeholder="Tu mensaje"
        required
      ></textarea>
      <div className="buttonFormContainer">
        <button className="buttonForm" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

const ContactSocialIcons = () => {
  const styles = {
    width: '40px',
    height: '40px',
  };

  return (
    <>
      <div className="socialIconsContainer">
        <a
          href="https://github.com/jessicaborda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent
            iconPath="/assets/about/icon_github_contact.svg"
            altText="githubIcon"
            style={styles}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jessicaborda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent
            iconPath="/assets/about/icon_linkedin_contact.svg"
            altText="linkedinIcon"
            style={styles}
          />
        </a>
        <a href="mailto:jessi.borda09@gmail.com">
          <IconComponent
            iconPath="/assets/about/icon_gmail_contact.svg"
            altText="gmailIcon"
            style={styles}
          />
        </a>
        <a
          href="https://www.instagram.com/ars_design_st?igsh=ODFlNTJ5a3JlamQz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent
            iconPath="/assets/about/icon_instagram_contact.svg"
            altText="instagramIcon"
            style={styles}
          />
        </a>
        <a
          href="https://www.facebook.com/share/1DEM839SBE/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconComponent
            iconPath="/assets/about/icon_facebook_contact.svg"
            altText="facebookIcon"
            style={styles}
          />
        </a>
      </div>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <div className="contactFormContainer">
        <div className="fondGradiant">
          <SvgComponent />
        </div>
        <div className="contactText">
          <h2>Contáctame</h2>
          <p>
            ¡Gracias por visitar mi portafolio! Estoy en constante aprendizaje y
            emocionada por seguir adquiriendo más habilidades en el desarrollo
            de software. Siempre estoy abierta a nuevas oportunidades, proyectos
            creativos y colaboraciones que permitan desarrollar mi creciente
            pasión por la tecnología. Si tienes alguna pregunta, una idea en
            mente o simplemente quieres contactarme, no dudes en escribirme.
            ¡Será un placer conversar contigo!
          </p>
        </div>
        <div className="contactContentContainer">
          <div className="contactContainer">
            <ContactForm />
          </div>
          <div className="contactSocialIconsContainer">
            <ContactSocialIcons />
          </div>
        </div>
      </div>
    </>
  );
};
