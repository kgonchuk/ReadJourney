import {
  RegisterBtn,
  RegisterLink,
  SubmissionContainer,
} from "./SubmissioButton.styled";

const RegistrationButton = () => {
  return (
    <SubmissionContainer>
      <RegisterBtn type="submit">Registration</RegisterBtn>
      <RegisterLink>Already have an account?</RegisterLink>
    </SubmissionContainer>
  );
};

export default RegistrationButton;
