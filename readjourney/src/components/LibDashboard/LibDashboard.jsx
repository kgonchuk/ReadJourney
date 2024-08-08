import { Form, Formik } from "formik";
import Dashboard from "../Dashboard/Dashboard";
import { Wrap } from "./LibDashboard.styled";
import * as Yup from "yup";
import {
  FilterTitle,
  FormField,
  FormFieldConteiner,
  FormFieldLabel,
  FormFields,
} from "../Dashboard/Dashboard.styled";
import {
  DashboardBtn,
  DashboardBtnWrap,
} from "../RecommendedDashboard/RecommendedDashboard.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOwnBooks } from "../../redux/books/booksSelector";
import { addNewBook, ownBooks } from "../../redux/books/booksOperation";
import Notiflix from "notiflix";
import LibRecommendedBooks from "./LibRecommendedBooks/LibRecommendedBooks";
import { createPortal } from "react-dom";
import SuccessfulAddModal from "../ModalWindow/SuccessfulAddiModal";
import Btn from "../Btn/Btn";

const initialValues = {
  title: "",
  author: "",
  page: "",
};
const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
  page: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .transform((value, originalValue) => originalValue.replace(/\s/g, "")),
});

export default function LibDashboard() {
  const [bookExists, setBookExists] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const ownLibrary = useSelector(selectOwnBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ownBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    const title = e.title;
    const author = e.author;
    const page = parseInt(e.page);

    if (page) {
      const bookExists = ownLibrary.find((item) => item.title === title);

      if (bookExists === undefined) {
        dispatch(addNewBook({ title, author, totalPages: page }));
        setBookExists(false);
        setOpenModal(true);
      } else {
        setBookExists(true);
        setOpenModal(false);

        Notiflix.Notify.warning("The book is already in the library");
      }
    }
    document.getElementById("page").blur();
  };

  const hadleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <Dashboard>
      <Wrap>
        <div style={{ marginBottom: 78 }}>
          <FilterTitle>Create your library:</FilterTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <FormFields>
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="title">Book title:</FormFieldLabel>
                    <FormField
                      name="title"
                      id="title"
                      type="title"
                      placeholder="I See You Are..."
                      error={errors.title && touched.title ? "true" : "false"}
                      style={bookExists ? { borderColor: "red" } : {}}
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
                      placeholder="Hilarion Pavlyuk"
                      paddindleft="95px"
                      error={errors.author && touched.author ? "true" : "false"}
                    />
                  </FormFieldConteiner>
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="page">
                      Number of pages:
                    </FormFieldLabel>
                    <FormField
                      name="page"
                      id="page"
                      type="page"
                      placeholder="664"
                      paddindleft="135px"
                      error={errors.page && touched.page ? "true" : "false"}
                    />
                  </FormFieldConteiner>
                </FormFields>

                <Btn label="Add book" onClick={setOpenModal} />
              </Form>
            )}
          </Formik>
        </div>

        <LibRecommendedBooks />
      </Wrap>
      {openModal &&
        createPortal(
          <SuccessfulAddModal closeModal={hadleModalClose} />,
          document.body
        )}
    </Dashboard>
  );
}
