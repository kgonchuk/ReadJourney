import React, { useState } from "react";
import {
  BtnContainer,
  Container,
  ContainerForm,
  FeedbackMessage,
  FormField,
  FormWrap,
  Icon,
  ImageWrap,
  InputField,
  InputGroup,
  Label,
} from "./Auth.styled";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import HeaderTittle from "../headerTittle/HeaderTittle";
import icon from "../../img/sprite.svg";
import HomepageImage from "../HomepageImage/HomepageImage";
import {
  RegisterBtn,
  RegisterLink,
} from "../SubmissionButton/SubmissioButton.styled";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperation";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const schema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(2, "The name must have at least 2 letters"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email address")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(7, "Password must be at least 7 characters"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate("/recommended");
    } catch (error) {
      if (error === "Request failed with status code 409") {
        Notiflix.Notify.failure("User with this email already exists.");
      } else {
        Notiflix.Notify.error("Registration failed. Please try again later.");
      }
    }
  };

  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Container>
      <FormWrap>
        <HeaderTittle />
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <ContainerForm>
                <InputGroup>
                  <FormField>
                    <Label htmlFor="name">Name:</Label>
                    <InputField
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Ilona Ratushniak"
                      paddingleft="65px"
                      style={{
                        borderColor:
                          touched.name && errors.name
                            ? "red"
                            : touched.name && !errors.name
                            ? "green"
                            : "defaultColor",
                      }}
                    />

                    {touched.name && errors.name ? (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-pajamas_error`} />
                      </Icon>
                    ) : (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-check-ok`} />
                      </Icon>
                    )}

                    {touched.name && !errors.name && (
                      <FeedbackMessage>Name is secure</FeedbackMessage>
                    )}
                  </FormField>
                  <FormField>
                    <Label htmlFor="email">Email:</Label>
                    <InputField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your@email.com"
                      paddingleft="53px"
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? "red"
                            : touched.email && !errors.email
                            ? "green"
                            : "defaultColor",
                      }}
                    />

                    {touched.email && errors.email ? (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-pajamas_error`} />
                      </Icon>
                    ) : (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-check-ok`} />
                      </Icon>
                    )}

                    {touched.email && !errors.email && (
                      <FeedbackMessage>Email is secure</FeedbackMessage>
                    )}
                  </FormField>
                  <FormField>
                    <Label htmlFor="password">Password:</Label>
                    <InputField
                      id="password"
                      name="password"
                      type="password"
                      placeholder="*********"
                      paddingleft="86px"
                      style={{
                        borderColor:
                          touched.password && errors.password
                            ? "red"
                            : touched.password && !errors.password
                            ? "green"
                            : "defaultColor",
                      }}
                    />
                    {touched.password && errors.password ? (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-pajamas_error`} />
                      </Icon>
                    ) : !errors.password && touched.password ? (
                      <Icon width={20} height={20}>
                        <use href={`${icon}#icon-check-ok`} />
                      </Icon>
                    ) : showPassword ? (
                      <Icon
                        width={20}
                        height={20}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#icon-eye`} />
                      </Icon>
                    ) : (
                      <Icon
                        width={20}
                        height={20}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toogleShowPassword();
                        }}
                      >
                        <use href={`${icon}#icon-eye-off`} />
                      </Icon>
                    )}

                    {touched.password && !errors.password && (
                      <FeedbackMessage>Password is secure</FeedbackMessage>
                    )}
                  </FormField>
                </InputGroup>
                <BtnContainer style={{ marginTop: "auto" }}>
                  <RegisterBtn type="submit">Registration</RegisterBtn>
                  <RegisterLink to="/login">
                    Already have an account?
                  </RegisterLink>
                </BtnContainer>
              </ContainerForm>
            </Form>
          )}
        </Formik>
      </FormWrap>
      <ImageWrap>
        <HomepageImage />
      </ImageWrap>
    </Container>
  );
}
