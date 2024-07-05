import styled from "styled-components";
import color from "../../global/globalColor";

export const HeaderTittleContainer = styled.div``;

export const HeaderTittleText = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    width: 444px;
    font-size: 64px;
    line-height: 0.94;
  }
`;
export const LogoWrap = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 108px;
  }
`;
export const HeaderTittleTextSecond = styled.span`
  color: ${color.whiteTranslucent};
`;
