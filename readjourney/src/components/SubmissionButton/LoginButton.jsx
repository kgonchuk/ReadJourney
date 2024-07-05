import {
  RegisterBtn,
  RegisterLink,
  SubmissionContainer,
} from "./SubmissioButton.styled";

const LoginButton = () => {
  return (
    <SubmissionContainer>
      <RegisterBtn type="submit">Log in</RegisterBtn>
      <RegisterLink>Don’t have an account? </RegisterLink>
    </SubmissionContainer>
  );
};

export default LoginButton;
