import { IconComponent } from '../injectors/iconComponent';

export const FooterIcons = () => {
  const styles = {
    width: '30px',
    height: '30px',
  };

  return (
    <div className="footerIcons">
      <a
        href="https://www.linkedin.com/in/jessicaborda/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent
          iconPath="../../assets/about/icon_linkedin.svg"
          altText="linkedinIcon"
          style={styles}
        />
      </a>
      <a
        href="https://www.instagram.com/ars_design_st?igsh=ODFlNTJ5a3JlamQz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent
          iconPath="/assets/about/icon_instagram.svg"
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
          iconPath="../../assets/about/icon_facebook.svg"
          altText="facebookIcon"
          style={styles}
        />
      </a>
      <a href="mailto:jessi.borda09@gmail.com">
        <IconComponent
          iconPath="../../assets/about/icon_gmail.svg"
          altText="gmailIcon"
          style={styles}
        />
      </a>
    </div>
  );
};
