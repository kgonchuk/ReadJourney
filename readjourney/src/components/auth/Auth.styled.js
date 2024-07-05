import styled from "styled-components";
import { ErrorMessage, Field } from "formik";
import { NavLink } from "react-router-dom";
import color from "../../global/globalColor";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
    justify-content: center;
    padding: 32px;
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${color.blackLight};
  border-radius: 30px;
  padding: 40px 64px;

  @media (min-width: 768px) {
    max-width: 704px;
    height: 960px;
    padding: 40px 64px;
  }

  @media (min-width: 1440px) {
    max-width: 600px;
    height: 736px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  margin-top: 40px;

  @media (min-width: 768px) {
    height: 308px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 14px;
  }
`;
export const FormField = styled.div`
  position: relative;
  max-width: 295px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    max-width: 472px;
  }
`;
export const Label = styled.label`
  color: ${color.gryeLight};
  position: absolute;
  top: 16px;
  left: 14px;
`;
export const InputField = styled(Field)`
  width: 100%;
  max-width: 295px;
  height: 50px;
  background-color: ${color.gryeBlack};
  border-radius: 12px;
  padding: 16px;
  padding-left: ${(props) => props.paddingleft || "65px"};
  outline: none;
  border: 1px solid
    ${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  color: ${color.whitePrimary};

  @media (min-width: 768px) {
    max-width: 472px;
    height: 50px;
    padding: 16px 14px 16px 65px;
    padding-left: ${(props) => props.paddingleft || "65px"};
  }
`;
export const ImageWrap = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${color.blackLight};
  border-radius: 30px;
  /* margin: 0 auto; */
  /* padding: 40px 64px; */
`;
export const Icon = styled.svg`
  position: absolute;
  top: 13px;
  right: 13px;
`;
export const FeedbackMessage = styled(NavLink)`
  font-size: 10px;
  color: ${color.green};
  padding: 4px 0px 0px 14px;
`;
export const BtnContainer = styled.div`
  display: flex;
`;
