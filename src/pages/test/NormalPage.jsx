import { Ability } from '../../components/aboutMeBody';
import { Footer } from '../../components/footer';
import { SvgComponent } from '../../components/injectors/svgComponent';

export const NormalPage = () => {
  return (
    <>
      <div className="container">
        <div className="fondGradiant">
          <SvgComponent />
        </div>
        <div className="body">
          <Ability />
          <Footer />
        </div>
      </div>
    </>
  );
};
