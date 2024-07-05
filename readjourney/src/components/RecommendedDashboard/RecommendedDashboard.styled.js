import { Field } from "formik";
import styled from "styled-components";
import color from "../../global/globalColor";

export const FormWrapper = styled.div``;
export const FormText = styled.h3`
  color: ${color.whitePrimary};
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
`;
export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 353px;
  border-radius: 30px;
  background-color: ${color.blackLight};
  padding: 40px 20px 20px 20px;
`;
export const DashboardInput = styled(Field)`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  outline: none;
  padding: 16px;
  padding-left: ${(props) => props.paddingleft || "95px"};
  border: 1px solid
    ${(props) => (props.error === "true" ? "red" : "rgba(18, 20, 23, 0.1)")};
  background-color: ${color.gryeBlack};
  color: ${color.whitePrimary};
  font-size: 14px;
`;
export const DashboardLabel = styled.label`
  color: ${color.gryeLight};
  position: absolute;
  top: 15px;
  left: 14px;
`;
export const DashboardGroup = styled.div`
  position: relative;
  margin-bottom: 8px;
`;
export const DashboardBtnWrap = styled.div``;
export const DashboardBtn = styled.button`
  border-radius: 30px;
  border: solid ${color.whiteLightTranslucent};
  color: ${color.whitePrimary};
  font-size: 16px;
  font-weight: 700;
  padding: 12px 28px;
  background-color: transparent;
`;
