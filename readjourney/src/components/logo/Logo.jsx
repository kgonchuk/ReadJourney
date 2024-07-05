import React from "react";
import { LogoContainer, LogoText } from "./Logo.styled";
import logo from "../../img/sprite.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <svg width={42} height={11}>
        <use href="../../img/sprite.svg#icon-Logo" />
        <use href={`${logo}#icon-Logo`} />
      </svg>
      <LogoText>READ JOURNEY</LogoText>
    </LogoContainer>
  );
};

export default Logo;
