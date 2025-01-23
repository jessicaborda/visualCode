import { Header } from '../../components';
import {
  AboutMe,
  Ability,
  Skills,
  Education,
  Contact,
} from '../../components/aboutMeBody';
// import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer';
// import { AboutMe } from '../../components/aboutMeBody/AboutMe';
// import { Ability } from '../../components/aboutMeBody/Ability';
// import { Skills } from '../../components/aboutMeBody/Skills';
// import { Education } from '../../components/aboutMeBody/Education';
// import { Contact } from '../../components/aboutMeBody/Contact';

export const About = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Ability />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};
