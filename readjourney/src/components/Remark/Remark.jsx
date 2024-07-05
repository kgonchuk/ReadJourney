import { RemarkContainer, RemarkSpan, RemarkText } from "./Remark.styled";
import remarkImg from "../../img/remark.png";
import remarkImg2x from "../../img/remark@2.png";

export default function Remark() {
  return (
    <RemarkContainer>
      <picture>
        <source srcSet={`${remarkImg2x} `} media="(min-resolution: 192dpi)" />
        <img src={remarkImg} alt="stack books" width={40} />
      </picture>
      <RemarkText>
        {" "}
        "Books are <RemarkSpan>windows</RemarkSpan> to the world, and reading is
        a journey into the unknown."
      </RemarkText>
    </RemarkContainer>
  );
}
