import React from 'react'
import './styles/Contact.css';
import { IconComponent } from '../iconComponent';

const ContactForm = () => {
  return (
    <form className='contactForm'>
      <input className='inputForm_name' type="text" placeholder="Tu nombre" />
      <input className='inputForm_email' type="text" placeholder='Tu Correo' />
      <input className='inputForm_asunto' type="text" placeholder='Asunto' />
      <textarea className='inputForm_message' name="message" id="message" placeholder='Tu mensaje' required></textarea>
      <div className='buttonFormContainer'>
        <button className='buttonForm'>Enviar</button>
      </div>
    </form>
  )
}

const ContactSocialIcons = () => {
  const styles = {
    width: '40px',
    height: '40px',
  };

  return (
    <>
      <div className='socialIconsContainer'>
        <IconComponent
          iconPath='src/assets/icon_github_contact.svg'
          altText='githubIcon'
          style={styles}
        />
        <IconComponent
          iconPath='src/assets/icon_linkedin_contact.svg'
          altText='linkedinIcon'
          style={styles}
        />
        <IconComponent
          iconPath='src/assets/icon_gmail_contact.svg'
          altText='gmailIcon'
          style={styles}
        />
        <IconComponent
          iconPath='src/assets/icon_instagram_contact.svg'
          altText='instagramIcon'
          style={styles}
        />
        <IconComponent
          iconPath='src/assets/icon_facebook_contact.svg'
          altText='facebookIcon'
          style={styles}
        />
      </div>
    </>
  )
}

export const Contact = () => {
  return (
    <>
      <div className='contactFormContainer'>
        <h2>Contáctame</h2>
        <p>¡Gracias por visitar mi portafolio! Estoy en constante aprendizaje y emocionada por seguir adquiriendo más habilidades en el desarrollo de software. Siempre estoy abierta a nuevas oportunidades, proyectos creativos y colaboraciones que permitan desarrollar mi creciente pasión por la tecnología. Si tienes alguna pregunta, una idea en mente o simplemente quieres contactarme, no dudes en escribirme. ¡Será un placer conversar contigo!</p>
        <div className='contactContentContainer'>
          <div className='contactContainer'>
            <ContactForm />
          </div>
          <div className='contactSocialIconsContainer'>
            <ContactSocialIcons />
          </div>
        </div>
      </div>
    </>
  )
}
