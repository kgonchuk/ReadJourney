import { OverlayBookContainer } from "./AddModal.styled";
import {
  CloseBtn,
  Img,
  ModalContainer,
  Text,
  TextSpan,
  Title,
} from "./SuccessfulAddModal.styled";
import succes from "../../img/succes.png";
import succes2x from "../../img/succes@2x.png";
import succesMob from "../../img/succesMob.png";
import succesMob2x from "../../img/succesMob@2x.png";
import icon from "../../img/sprite.svg";

export default function SuccessfulAddModal({ closeModal }) {
  const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      closeModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }
  return (
    <OverlayBookContainer onClick={overlayClick}>
      <ModalContainer>
        <CloseBtn onClick={closeModal}>
          <svg width={22} height={22}>
            <use href={`${icon}#icon-x`} />
          </svg>
        </CloseBtn>
        <picture>
          <source
            srcSet={`${succesMob} 1x, ${succesMob2x} 2x`}
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${succes} 1x, ${succes2x} 2x`}
            media="(min-width: 766px)"
          />
          <Img src={succes} alt="add book" />
        </picture>
        <Title>Good job</Title>
        <Text>
          Your book is now in <TextSpan>the library!</TextSpan> The joy knows no
          bounds and now you can start your training
        </Text>
      </ModalContainer>
    </OverlayBookContainer>
  );
}
