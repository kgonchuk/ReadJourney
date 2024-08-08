import styled from "styled-components";
import color from "../../global/globalColor";

export const PaginationContainer = styled.div``;
export const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid ${color.whiteLightTranslucent};
  background-color: transparent;
  margin-left: 8px;
`;
export const PaginationSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${(props) =>
    props.stoke === "true" ? color.whiteLightTranslucent : color.whitePrimary};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
