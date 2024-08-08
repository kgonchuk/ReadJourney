import color from "../../global/globalColor";
import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.dimmedBackground};
  overflow: auto;
  z-index: 5;

  transform: scale(0);
  &.active {
    transform: scale(1);
  }
`;
export const OverlayBookContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 250px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    padding-top: 270px;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 182px;
  }
`;
export const CardInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 100%;
  background: ${color.blackLight};
  border-radius: 12px;
  padding: 40px;

  @media (min-width: 768px) {
    width: 500px;
    height: 483px;
    padding: 50px;
  }
`;
export const CloseIcon = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.whitePrimary};
  background: transparent;
  transition: color 0.3s ease, transform 0.3s ease;
  z-index: 100;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
export const BookImg = styled.img`
  width: 140px;
  height: 213px;
  border-radius: 8px;
  margin-bottom: 16px;
  z-index: 100;

  @media (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;
export const TitleBook = styled.h2`
  text-align: center;
  font-size: 20px;
  /* line-height: 1; */
  font-weight: 700;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const AuthorBook = styled.p`
  font-size: 12px;
  color: ${color.gryeLight};
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 400px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const TotalPages = styled.p`
  font-size: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const AddButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 2%;
  padding: ${(props) => (props.prop === "true" ? "12px 24px" : "10px 20px")};
  border: 1px solid ${color.whiteLightTranslucent};
  border-radius: 30px;
  background: transparent;
  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.blackLight};
    background: ${color.whitePrimary};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: ${(props) => (props.prop === "true" ? "14px 28px" : "12px 28px")};
  }
`;
