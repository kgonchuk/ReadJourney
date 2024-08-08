import styled from "styled-components";
import color from "../../global/globalColor";
export const ModalContainer = styled.div`
  position: relative;
  width: 342px;
  height: 290px;
  background-color: ${color.blackLight};
  border-radius: 12px;
  border: 1px solid rgb(104, 104, 104, 0.2);
  padding: 50px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.blackPrimary};
  background: transparent;
  transition: transform 0.25s linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    right: 16px;
  }
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  /* margin-bottom: 20px; */
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 68px;
    height: 70px;
    margin-bottom: 32px;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 14;
  font-weight: 500;
  color: ${color.gryeLight};
  text-align: center;
`;
export const TextSpan = styled.span`
  font-size: 14;
  font-weight: 500;
  color: ${color.whitePrimary};
`;
