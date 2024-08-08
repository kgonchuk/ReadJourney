import { NavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../../global/globalColor";

export const FunctionContainer = styled.div`
  width: 313px;
  border-radius: 12px;
  padding: 20px;
  background-color: ${color.gryeBlack};
  margin-top: 20px;
`;
export const FunctionTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${color.whitePrimary};
  margin-bottom: 40px;
`;

export const FunctionBlock = styled.div``;
export const FunctionElement = styled.div`
  display: flex;
  gap: 12px;
`;

export const TextOne = styled.p`
  color: ${color.whitePrimary};
  width: 197px;
`;

export const TextTwo = styled.p`
  color: ${color.whitePrimary};
  width: 200px;
`;

export const TextSpan = styled.span`
  color: ${color.gryeLight};
`;

export const FunctionNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: ${color.whitePrimary};
  color: ${color.blackLight};
  font-size: 20px;
  font-weight: 700;
`;
export const FunctionLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const LinkText = styled.p`
  position: relative;
  color: ${color.gryeLight};
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s linear;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 1px;
    background: ${color.gryeLight};
    transition: background 0.3s linear;
  }

  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    &::after {
      background: ${color.whitePrimary};
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const LinkSvg = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 0.25s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
