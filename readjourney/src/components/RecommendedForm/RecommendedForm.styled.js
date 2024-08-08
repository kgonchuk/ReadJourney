import styled from "styled-components";
import color from "../../global/globalColor";

export const MainWrap = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* flex-direction: column; */
  gap: 10px;
  padding: 10px 0;

  @media (min-width: 768px) {
    gap: 16px;
    padding: 16px 0;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const SectionBookWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;
export const SectionTitle = styled.h1``;
export const BookList = styled.ul`
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 27px 20px;
`;
