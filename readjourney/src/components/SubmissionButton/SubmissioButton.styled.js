import styled from "styled-components";
import color from "../../global/globalColor";
import { NavLink } from "react-router-dom";

export const SubmissionContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const RegisterBtn = styled.button`
  background: ${color.darkGgeen};
  color: ${color.blackLight};
  border-radius: 30px;
  font: 20px;
  font-weight: 700;
  line-height: 1;
  margin-right: 14px;
  padding: ${(props) => (props.log === "login" ? "12px 45px" : "12px 29px")};
  transition: color 0.3s linear, background 0.3s linear;
  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    background: ${color.blackLight};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent};
  }
`;
export const RegisterLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: ${color.gryeLight};
  transition: color 0.3s linear;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
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
