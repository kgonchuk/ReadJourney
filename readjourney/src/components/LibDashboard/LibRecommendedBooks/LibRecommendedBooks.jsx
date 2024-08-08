import {
  LinkTitlelTo,
  LinkTo,
  LinkToSvg,
} from "../../Dashboard/Dashboard.styled";
import {
  BookAuthor,
  BookImg,
  BookItem,
  BookList,
  BookTitle,
  RecommendedContainer,
  RecommendedTitle,
} from "./LibRecommendedBooks.styled";
import icon from "../../../img/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectBookData } from "../../../redux/books/booksSelector";
import { fetchBooks } from "../../../redux/books/booksOperation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../../ModalWindow/AddModal";

export default function LibRecommendedBooks({ book }) {
  const results = useSelector(selectBookData);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks({ page: 1, limit: 10 }));
  }, [dispatch]);

  const hadleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <RecommendedContainer>
      <RecommendedTitle>Recommended books</RecommendedTitle>
      <BookList>
        {results?.slice(0, 3).map((book) => (
          <BookItem key={book._id}>
            <BookImg src={book.imageUrl} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
          </BookItem>
        ))}
      </BookList>
      <LinkTo to="/recommended">
        <LinkTitlelTo>Home</LinkTitlelTo>
        <LinkToSvg>
          {" "}
          <use href={`${icon}#icon-arrow-right`} />
        </LinkToSvg>
      </LinkTo>
      {/* {openModal &&
        createPortal(
          <AddModal
            book={book}
            closeModal={hadleModalClose}
            btnLabel={"Start reading"}
          />,
          document.body
        )} */}
    </RecommendedContainer>
  );
}
