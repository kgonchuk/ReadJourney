import React from "react";
import {
  HeaderTittleContainer,
  HeaderTittleText,
  HeaderTittleTextSecond,
  LogoWrap,
} from "./HeaderTittle.styled";
import Logo from "../logo/Logo";

const HeaderTittle = () => {
  return (
    <HeaderTittleContainer>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <HeaderTittleText>
        {" "}
        Expand your mind, reading
        <HeaderTittleTextSecond> a book</HeaderTittleTextSecond>
      </HeaderTittleText>
    </HeaderTittleContainer>
  );
};

export default HeaderTittle;
