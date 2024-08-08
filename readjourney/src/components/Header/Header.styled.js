import styled from "styled-components";
import { NavLink } from "react-router-dom";
import color from "../../global/globalColor";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 74px;
  padding: 28px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: ${color.blackLight};
`;

export const NavContainer = styled.nav``;
export const NavigateLink = styled(NavLink)`
  position: relative;
  padding: 10px 2px;
  font-size: 14px;
  line-height: 1.13;
  color: ${color.gryeLight};

  transition: color 0.2s linear;
  &:hover,
  &:focus {
    color: ${color.whitePrimary};
  }

  &.active {
    color: ${color.whitePrimary};
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${color.blue};
      border-radius: 2px;
      left: 50%;
      transform: translateX(-50%);
      top: 79%;
    }

    &:hover {
      color: ${color.whitePrimary};
    }
  }
  &:not(:last-child) {
    @media (min-width: 768px) {
      margin-right: 32px;
      padding: 20px 2px;
    }
    @media (min-width: 1440px) {
      margin-right: 40px;
    }
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${color.gryeBlack};
  border: 1px solid ${color.whiteLightTranslucent};
  color: ${color.whitePrimary};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`;
export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${color.whitePrimary};
  margin-right: 18px;
`;
export const BtnLogout = styled.button`
  font-size: 16px;
  font-weight: 700;
  /* color: ${color.whitePrimary}; */
  padding: 12px 28px;
  border-radius: 30px;
  border: solid 1px ${color.whiteLightTranslucent};
  background: ${color.darkGgeen};
  color: ${color.blackLight};
  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    background: ${color.blackLight};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent};
  }
`;
