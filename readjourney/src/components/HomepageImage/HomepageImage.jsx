import homepageMobile from "../../img/homepageMobile.jpg";
import homepageDesctop from "../../img/homepageDesctop.jpg";
import homepageDesctop2x from "../../img/homepageDesctop@2x.jpg";
import homepageMobile2x from "../../img/homepageMobile@2x.jpg";
import { Main } from "./HomepageImage.styled";

export default function HomepageImage() {
  return (
    <picture>
      <source
        srcSet={`${homepageMobile} 1x, ${homepageMobile2x} 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`${homepageDesctop} 1x, ${homepageDesctop2x} 2x`}
        media="(min-width: 1440px)"
      />
      <Main src={homepageDesctop} alt="register img" />
    </picture>
  );
}
