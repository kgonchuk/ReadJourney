import {
  DashboardBtn,
  DashboardBtnWrap,
  FormWrapper,
  ResetBtn,
} from "./RecommendedDashboard.styled";
import {
  FilterTitle,
  FormField,
  FormFieldConteiner,
  FormFieldLabel,
  FormFields,
} from "../../components/Dashboard/Dashboard.styled";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Remark from "../Remark/Remark";
import RecommendedFunction from "../RecommendedFunction/RecommendedFunction";
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/books/booksOperation";
import Notiflix from "notiflix";
import { RemarkContainer } from "../Remark/Remark.styled";

const initialValues = {
  title: "",
  author: "",
};
const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
});
export default function RecommendedDashboard() {
  const [isRestButtonVisible, setIsRestButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const { title, author } = e;
    if (title === undefined) return;
    if (title) {
      setIsRestButtonVisible(true);
      dispatch(fetchBooks({ title, author }));
    } else {
      Notiflix.Notify.failure("Kindly complete the form");
    }
    document.getElementById("page").blur();
  };

  const handleReset = (resetForm) => {
    setIsRestButtonVisible(false);
    resetForm();
    dispatch(fetchBooks({ page: 1, limit: 10 }));
  };

  return (
    <Dashboard>
      <DashboardBtnWrap>
        <FormWrapper>
          <FilterTitle>Filters:</FilterTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ resetForm }) => (
              <Form>
                <FormFields>
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="title">Book title:</FormFieldLabel>
                    <FormField
                      name="title"
                      id="title"
                      type="title"
                      placeholder="Enter text"
                    />
                  </FormFieldConteiner>
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="author">
                      The author:
                    </FormFieldLabel>
                    <FormField
                      name="author"
                      id="author"
                      type="author"
                      placeholder="Enter text"
                    />
                  </FormFieldConteiner>
                </FormFields>
                <DashboardBtnWrap>
                  <DashboardBtn type="submit" onClick={handleSubmit}>
                    To apply
                  </DashboardBtn>
                  {isRestButtonVisible && (
                    <ResetBtn
                      label="Rest"
                      onClick={() => handleReset(resetForm)}
                    >
                      Reset
                    </ResetBtn>
                  )}
                </DashboardBtnWrap>
              </Form>
            )}
          </Formik>
        </FormWrapper>

        <RecommendedFunction />
        <Remark />
      </DashboardBtnWrap>
    </Dashboard>
  );
}
