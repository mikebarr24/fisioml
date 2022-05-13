import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

function SocialIcons(props) {
  return (
    <div className={props.className}>
      <IoLogoFacebook />
      <IoLogoTwitter />
      <IoLogoInstagram />
    </div>
  );
}

export default SocialIcons;
