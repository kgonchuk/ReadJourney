import {
  DashboardBtn,
  DashboardBtnWrap,
  DashboardContainer,
  DashboardGroup,
  DashboardInput,
  DashboardLabel,
  FormText,
  FormWrapper,
} from "./RecommendedDashboard.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Remark from "../Remark/Remark";
import RecommendedFunction from "../RecommendedFunction/RecommendedFunction";

const initialValues = {
  title: "",
  author: "",
};
const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
});
export default function RecommendedDashboard() {
  const handleSubmit = () => {};
  return (
    <DashboardContainer>
      <FormWrapper>
        <FormText>Filters:</FormText>
        <Formik
          initialValues={initialValues}
          validate={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <DashboardGroup>
              <DashboardLabel htmlFor="title">Book title:</DashboardLabel>
              <DashboardInput
                name="title"
                id="title"
                type="title"
                placeholder="Enter text"
              />
            </DashboardGroup>
            <DashboardGroup>
              <DashboardLabel htmlFor="author">The author:</DashboardLabel>
              <DashboardInput
                name="author"
                id="author"
                type="author"
                placeholder="Enter text"
              />
            </DashboardGroup>
            <DashboardBtnWrap>
              <DashboardBtn type="submit">To apply</DashboardBtn>
            </DashboardBtnWrap>
          </Form>
        </Formik>
        {/* <RecommendedFunction /> */}
        <Remark />
      </FormWrapper>
    </DashboardContainer>
  );
}
