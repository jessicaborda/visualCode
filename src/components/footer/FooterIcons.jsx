import { IconComponent } from '../injectors/iconComponent';

export const FooterIcons = () => {
  const styles = {
    width: '30px',
    height: '30px',
  };

  return (
    <div className="footerIcons">
      <IconComponent
        iconPath="public/assets/about/icon_linkedin.svg"
        altText="facebookIcon"
        style={styles}
      />
      <IconComponent
        iconPath="public/assets/about/icon_instagram.svg"
        altText="instagramIcon"
        style={styles}
      />
      <IconComponent
        iconPath="public/assets/about/icon_facebook.svg"
        altText="twitterIcon"
        style={styles}
      />
      <IconComponent
        iconPath="public/assets/about/icon_gmail.svg"
        altText="twitterIcon"
        style={styles}
      />
    </div>
  );
};
