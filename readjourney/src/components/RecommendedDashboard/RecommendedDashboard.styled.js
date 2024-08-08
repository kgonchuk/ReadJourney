import styled from "styled-components";
import color from "../../global/globalColor";

export const FormWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const DashboardBtnWrap = styled.div`
  width: 100%;
`;
export const DashboardBtn = styled.button`
  border-radius: 30px;
  border: solid ${color.whiteLightTranslucent};
  font-size: 16px;
  font-weight: 700;
  padding: 12px 28px;
  background: ${color.darkGgeen};
  color: ${color.blackLight};

  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    background: ${color.blackLight};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent};
  }
`;
export const ResetBtn = styled.button`
  border-radius: 30px;
  border: solid ${color.whiteLightTranslucent};
  background: ${color.darkGgeen};
  color: ${color.blackLight};
  font-size: 16px;
  font-weight: 700;
  padding: 12px 28px;
  margin-left: 30px;
  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.whitePrimary};
    background: ${color.blackLight};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent};
  }
`;
