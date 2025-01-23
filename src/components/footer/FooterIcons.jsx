import { IconComponent } from '../iconComponent';

export const FooterIcons = () => {
  const styles = {
    width: '30px',
    height: '30px',
  };

  return (
    <div className="footerIcons">
      <IconComponent
        iconPath="src/assets/icon_linkedin.svg"
        altText="facebookIcon"
        style={styles}
      />
      <IconComponent
        iconPath="src/assets/icon_instagram.svg"
        altText="instagramIcon"
        style={styles}
      />
      <IconComponent
        iconPath="src/assets/icon_facebook.svg"
        altText="twitterIcon"
        style={styles}
      />
      <IconComponent
        iconPath="src/assets/icon_gmail.svg"
        altText="twitterIcon"
        style={styles}
      />
    </div>
  );
};
