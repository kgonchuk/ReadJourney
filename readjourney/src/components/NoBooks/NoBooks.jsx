import noBookDesc from "../../img/bookDesc.png";
import noBookDesc2x from "../../img/bookDesc2x.png";
import noBookMob2x from "../../img/bookMob2x.png";
import noBookMob from "../../img/bookMob.png";
import {
  ErrorText,
  Img,
  Message,
  NoBookContainer,
  Picture,
} from "./NoBooks.styled";
export default function NoBooks({ place }) {
  return (
    <NoBookContainer>
      <Picture>
        <source
          srcSet={`${noBookMob} 1x, ${noBookMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${noBookDesc} 1x, ${noBookDesc2x} 2x`}
          media="(min-width: 766px)"
        />
        <Img src={noBookDesc} alt="stack books" />
      </Picture>
      {place === "MyLibraryBooks" && (
        <Message>
          To start training, add <ErrorText>some of your books</ErrorText> or
          from the recommended ones
        </Message>
      )}
      {place === "Recommended" && (
        <Message>
          Oops <ErrorText>unfortunately</ErrorText> nothing was found
        </Message>
      )}
    </NoBookContainer>
  );
}
