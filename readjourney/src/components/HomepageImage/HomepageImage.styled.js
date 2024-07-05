import styled from "styled-components";

export const Main = styled.img`
  display: block;
  border-radius: 30px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
    max-width: 100%;
    height: 736px;
    margin-left: auto;
    margin-right: auto;
  }
`;
