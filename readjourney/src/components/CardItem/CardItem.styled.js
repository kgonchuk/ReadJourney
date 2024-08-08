import styled from "styled-components";
import color from "../../global/globalColor";

export const CardItemContainer = styled.li`
  width: 137px;
  height: 248px;
  background: transparent;

  &:last-child {
    margin-right: 0;
  }
`;
export const BookImg = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  margin-bottom: 8px;
  z-index: 100;
  background: ${color.gryeBlack};
  cursor: pointer;
`;
export const BookInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BookInfo = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 89px;
  }
  p {
    font-size: 10px;
    color: ${color.gryeLight};
    white-space: nowrap;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${color.gryeLight};
  }
`;

export const BookRecommended = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  h3 {
    margin-bottom: 2px;
    font-weight: 700;
    font-size: 14px;
    width: 137px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 137px;
  }
  p {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    color: ${color.gryeLight};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const BookDellBtn = styled.button`
  /* background: ${color.gryeLight}; */

  background-color: transparent;
  transition: transform 0.25s linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
