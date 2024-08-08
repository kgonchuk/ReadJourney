import styled from "styled-components";

import color from "../../../global/globalColor";

export const RecommendedContainer = styled.div`
  background-color: ${color.gryeBlack};
  border-radius: 12px;
  padding: 20px;
`;
export const RecommendedTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const BookList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const BookItem = styled.li`
  width: 71px;
  height: 141px;
`;
export const BookImg = styled.img`
  width: 71px;
  height: 107px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const BookTitle = styled.h4`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BookAuthor = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${color.gryeLight};
`;
