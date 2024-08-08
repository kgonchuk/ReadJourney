import styled from "styled-components";
import color from "../../global/globalColor";

export const DropdownContainer = styled.div`
  position: relative;
`;
export const ArrowIcon = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${color.charcoalGray};
  outline: none;
  cursor: pointer;
  font-size: 12px;
  background: transparent;
  padding: 12px 14px;

  @media (min-width: 768px) {
    width: 153px;
    height: 46px;
    padding: 14px;
    font-size: 14px;
  }
`;
export const OptionList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 0;
  color: ${color.gryeLight};
  background-color: ${color.gryeBlack};
  border-top: none;
  list-style: none;
  padding: 14px;
  margin: 0;
  width: 100%;
  border-radius: 12px;
  display: ${(props) => (props.open ? "block" : "none")};
`;
export const OptionItem = styled.li`
  cursor: pointer;
  font-size: 12px;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
  &:hover {
    color: ${color.whitePrimary};
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
