import {
  AboutMe,
  Ability,
  Skills,
  Education,
  Contact,
} from '../../components/aboutMeBody';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

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
