// import color from "../../global/globalColor";
// import styled from "styled-components";

// export const StyledModal = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 335px;
//   height: 100%;
//   background: ${color.blackLight};
//   border-radius: 12px;
//   padding: 40px;

//   @media (min-width: 768px) {
//     width: 500px;
//     height: 483px;
//     padding: 50px;
//   }
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   stroke: ${color.blackPrimary};
//   background: transparent;
//   transition: color 0.3s ease, transform 0.3s ease;

//   &:hover,
//   &:focus {
//     transform: scale(1.2);
//   }
// `;

// export const CoverImage = styled.img`
//   width: 140px;
//   height: 213px;
//   border-radius: 8px;
//   margin-bottom: 16px;

//   @media (min-width: 768px) {
//     width: 153px;
//     height: 233px;
//   }
// `;

// export const Title = styled.h2`
//   text-align: center;
//   font-size: 18px;
//   line-height: 1;
//   margin-bottom: 2px;

//   @media (min-width: 768px) {
//     font-size: 20px;
//     max-width: 400px;

//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

// export const AuthorInfo = styled.p`
//   font-size: 12px;
//   color: ${color.gryeLight};
//   margin-bottom: 4px;

//   @media (min-width: 768px) {
//     font-size: 14px;
//     max-width: 400px;

//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

// export const PageCount = styled.p`
//   font-size: 10px;
//   margin-bottom: 20px;

//   @media (min-width: 768px) {
//     margin-bottom: 32px;
//   }
// `;

// export const Img = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-bottom: 20px;

//   @media (min-width: 768px) {
//     width: 68px;
//     height: 70px;
//     margin-bottom: 32px;
//   }
// `;

// export const SuccessMessage = styled.h3`
//   font-size: 18px;
//   font-weight: 700;
//   margin-bottom: 10px;

//   @media (min-width: 768px) {
//     font-size: 20px;
//     margin-bottom: 14px;
//   }
// `;

// export const Heading = styled.p`
//   text-align: center;
//   color: ${color.gryeLight};
// `;

// export const LibraryName = styled.span`
//   color: ${color.whitePrimary};
// `;

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
