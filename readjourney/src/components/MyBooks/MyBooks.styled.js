import styled from "styled-components";
import color from "../../global/globalColor";

export const MyBooksContainer = styled.div`
  border-radius: 30px;
  background-color: ${color.blackLight};
  padding: 40px;
  width: 847px;
  height: 651px;
`;

export const MyBookWrap = styled.div``;
export const BooksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const MyBooksTitle = styled.h3``;
export const Filter = styled.select`
  border: solid 1px ${color.whitePrimary};
  border-radius: 12px;
  padding: 14px;
  background-color: transparent;
  color: ${color.whitePrimary};
  outline: none;

  option {
    background-color: ${color.gryeBlack};
    color: ${color.gryeLight};
  }
`;
export const BookList = styled.ul`
  display: flex;
  gap: 27px 20px;
  height: 248px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
