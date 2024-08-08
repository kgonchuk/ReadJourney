import {
  AddButton,
  AuthorBook,
  CardInfoContainer,
  CloseIcon,
  TitleBook,
  TotalPages,
  BookImg,
  OverlayBookContainer,
} from "./AddModal.styled";
import icon from "../../img/sprite.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookById, ownBooks } from "../../redux/books/booksOperation";
import { selectOwnBooks } from "../../redux/books/booksSelector";
import Notiflix from "notiflix";
import Btn from "../Btn/Btn";
import { useNavigate } from "react-router-dom";

export default function AddModal({ book, closeModal, btnLabel }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownLibrary = useSelector(selectOwnBooks);

  const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      closeModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }

  useEffect(() => {
    dispatch(ownBooks());
  }, [dispatch]);

  const handleButtonClick = () => {
    if (btnLabel === "Add to library") {
      const bookExist = ownLibrary.find((item) => item.title === book.title);
      if (bookExist === undefined) {
        Notiflix.Notify.success("The book was added successfully");
        dispatch(addBookById(book._id));
      } else {
        Notiflix.Notify.warning("The book is already in the library.");
      }
    }
    if (btnLabel === "Start reading") navigate(`/reading/${book._id}`);
  };
  if (!book) {
    return null;
  }

  return (
    <OverlayBookContainer onClick={overlayClick}>
      <CardInfoContainer>
        <CloseIcon onClick={closeModal}>
          <svg width={22} height={22}>
            <use href={`${icon}#icon-x`} />
          </svg>
        </CloseIcon>
        <BookImg src={book.imageUrl} alt={book.title} />
        <TitleBook>{book.title}</TitleBook>
        <AuthorBook>{book.author}</AuthorBook>
        <TotalPages>{book.totalPages}</TotalPages>

        <Btn label={btnLabel} onClick={handleButtonClick} prop="true" />
      </CardInfoContainer>
    </OverlayBookContainer>
  );
}
