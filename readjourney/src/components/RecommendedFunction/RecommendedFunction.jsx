import {
  FunctionBlock,
  FunctionContainer,
  FunctionElement,
  FunctionLink,
  FunctionNumber,
  FunctionTitle,
  LinkSvg,
  LinkText,
  TextOne,
  TextSpan,
  TextTwo,
} from "./RecommendedFunction.styled";
import icon from "../../img/sprite.svg";
import { LinkTitlelTo, LinkTo, LinkToSvg } from "../Dashboard/Dashboard.styled";

export default function RecommendedFunction() {
  return (
    <FunctionContainer>
      <FunctionTitle>Start your workout</FunctionTitle>

      <FunctionBlock>
        <FunctionElement style={{ marginBottom: 20 }}>
          <FunctionNumber>1</FunctionNumber>

          <TextOne>
            Create a personal library:{" "}
            <TextSpan>add the books you intend to read to it.</TextSpan>
          </TextOne>
        </FunctionElement>
        <FunctionElement>
          <FunctionNumber>2</FunctionNumber>

          <TextTwo>
            Create your first workout:{" "}
            <TextSpan>define a goal, choose a period, start training.</TextSpan>
          </TextTwo>
        </FunctionElement>
      </FunctionBlock>
      <LinkTo to="/library">
        <LinkTitlelTo>My library</LinkTitlelTo>
        <LinkToSvg>
          {" "}
          <use href={`${icon}#icon-arrow-right`} />
        </LinkToSvg>
      </LinkTo>
    </FunctionContainer>
  );
}
