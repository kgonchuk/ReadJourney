import { useEffect, useState } from "react";
import {
  selectBookData,
  selectTotalPage,
} from "../../redux/books/booksSelector";
import CardItem from "../CardItem/CardItem";
import Pagination from "../Pagination/Pagination";
import RecommendedDashboard from "../RecommendedDashboard/RecommendedDashboard";
import {
  BookList,
  MainWrap,
  SectionBookWrap,
  SectionTitle,
} from "./RecommendedForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/booksOperation";

import NoBooks from "../NoBooks/NoBooks";
import AddModal from "../ModalWindow/AddModal";
import CustomPortalModal from "../ModalWindow/PortalModal";
import PortalModal from "../ModalWindow/PortalModal";
import BookDetails from "../BookDetails/BookDetails";

import MainContainer from "../MainContainer/MainContainer";
import { createPortal } from "react-dom";
import { ModalPortal } from "../ModalPortal/ModalPortal";

const calculateLimit = (width) => {
  if (width < 768) {
    return 2;
  } else if (width >= 768 && width < 1440) {
    return 8;
  } else {
    return 10;
  }
};

export default function RecommendedForm() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(calculateLimit(window.innerWidth));
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(false);
  const results = useSelector(selectBookData);
  const totalPages = useSelector(selectTotalPage);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newLimit = calculateLimit(newWidth);
      setLimit(newLimit);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchBooks({ page, limit }));
  }, [dispatch, page, limit]);

  const openLoginModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const hadleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <MainWrap>
      <RecommendedDashboard />

      <MainContainer>
        <SectionBookWrap>
          <SectionTitle>Recommended</SectionTitle>
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            page={page}
          />
        </SectionBookWrap>

        {results && results.length > 0 ? (
          <BookList>
            {results.map((book) => (
              <CardItem
                key={book._id}
                book={book}
                openLoginModal={openLoginModal}
              />
            ))}
          </BookList>
        ) : (
          <NoBooks place="Recommended" />
        )}
      </MainContainer>
      {/* {openModal &&
        createPortal(
          <AddModal
            book={bookData}
            closeModal={hadleModalClose}
            btnLabel={"Add to library"}
          />,
          document.body
        )} */}
    </MainWrap>
  );
}
