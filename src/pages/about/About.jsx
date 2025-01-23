import { Header } from '../../components';
import {
  AboutMe,
  Ability,
  Skills,
  Education,
  Contact,
} from '../../components/aboutMeBody';

import { Footer } from '../../components/footer/Footer';
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
