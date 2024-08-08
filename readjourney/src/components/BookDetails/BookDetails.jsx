// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// import { addBookById, ownBooks } from "../../redux/books/booksOperation";
// import { selectOwnBooks } from "../../redux/books/booksSelector";
// import sprite from "../../img/sprite.svg";
// // import notFoundImg from "../../img/notFoundImg/open-book-desct.jpg";
// // import Btn from "components/Btn/Btn";
// // import AlternativeImage from "components/AlternativeImage/AlternativeImage";
// import {
//   AuthorInfo,
//   CloseButton,
//   CoverImage,
//   PageCount,
//   StyledModal,
//   Title,
// } from "./BookDetails.styled";
// import Btn from "../Btn/Btn";

// export default function BookDetails({ closeModals, bookData, btnLabel }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const ownLibrary = useSelector(selectOwnBooks);

//   useEffect(() => {
//     dispatch(ownBooks());
//   }, [dispatch]);

//   const handleButtonClick = () => {
//     if (btnLabel === "Add to library") {
//       const bookExists = ownLibrary.find(
//         (item) => item.title === bookData.title
//       );

//       if (!bookExists) {
//         // toast.success("The addition of the book was successful");
//         dispatch(addBookById(bookData._id));
//       } else {
//         // toast.error("The book has already been added to the library");
//       }
//     }

//     if (btnLabel === "Start reading") navigate(`/reading/${bookData._id}`);

//     closeModals();
//   };

//   if (!bookData) {
//     return null;
//   }

//   return (
//     <StyledModal>
//       <CloseButton onClick={closeModals}>
//         <svg width={22} height={22}>
//           <use href={`${sprite}#icon-x`} />
//         </svg>
//       </CloseButton>

//       {bookData.imageUrl ? (
//         <CoverImage src={bookData.imageUrl} alt="cover" />
//       ) : (
//         <div>
//           {/* <CoverImage src={notFoundImg} alt="cover fallback" /> */}
//           <p>Not found</p>
//         </div>
//       )}

//       <Title>{bookData.title}</Title>
//       <AuthorInfo>{bookData.author}</AuthorInfo>
//       <PageCount>{bookData.totalPages} pages</PageCount>

//       <Btn label={btnLabel} onClick={handleButtonClick} prop="true" />
//     </StyledModal>
//   );
// }
// import {
//   BookAutor,
//   BookCard,
//   BookDataBlock,
//   BookImg,
//   BookTitle,
//   DellBtn,
//   TitleAutorBlock,
// } from "./CardItem.styled";
// import sprite from "../../img/sprite.svg";
// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/books/booksOperation";
// import notFoundImg from "../../img/open-book-desct.jpg";

// export default function CardBook({
//   book,
//   openLoginModal,
//   currentPage = false,
// }) {
//   const dispatch = useDispatch();

//   const handleDeleteClick = () => {
//     dispatch(deleteBook(book._id));
//   };

//   return (
//     <BookCard>
//       {book.imageUrl ? (
//         <BookImg
//           src={book.imageUrl}
//           alt="book title"
//           onClick={() => openLoginModal(book)}
//         />
//       ) : (
//         <BookImg
//           src={notFoundImg}
//           alt="book title"
//           onClick={() => openLoginModal(book)}
//         />
//       )}
//       <BookDataBlock>
//         <TitleAutorBlock page={currentPage === "MyLibrary" ? "true" : ""}>
//           <BookTitle>{book.title}</BookTitle>
//           <BookAutor>{book.author}</BookAutor>
//         </TitleAutorBlock>

//         {currentPage === "MyLibrary" && (
//           <DellBtn onClick={handleDeleteClick}>
//             <svg width={28} height={28}>
//               <use href={`${sprite}#icon-dell`} />
//             </svg>
//           </DellBtn>
//         )}
//       </BookDataBlock>
//     </BookCard>
//   );
// }

import notFoundImg from "../../img/open-book-desct.jpg";
import icon from "../../img/sprite.svg";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/booksOperation";

import {
  BookAuthor,
  BookDellBtn,
  BookImg,
  BookInfo,
  BookInfoWrap,
  BookRecommended,
  BookTitle,
  CardItemContainer,
} from "./BookDetails.styled";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../ModalWindow/AddModal";

export default function BookDetails({
  book,
  currentPage = false,
  openLoginModal,
}) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleDell = () => {
    dispatch(deleteBook(book._id));
  };

  const hadleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <CardItemContainer>
      {book.imageUrl ? (
        <BookImg src={book.imageUrl} alt="book title" onClick={setOpenModal} />
      ) : (
        <BookImg
          src={notFoundImg}
          alt="not found"
          onClick={() => openLoginModal(book)}
        />
      )}

      {currentPage === "Mylibrary" ? (
        <BookInfoWrap>
          <BookInfo>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </BookInfo>
          <BookDellBtn onClick={handleDell}>
            <svg width="28" height="28" stroke="rgba(323, 80, 80, 0.2)">
              <use href={`${icon}#icon-dell`} />
            </svg>
          </BookDellBtn>
        </BookInfoWrap>
      ) : (
        <BookRecommended>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </BookRecommended>
      )}

      {openModal &&
        createPortal(
          <AddModal
            book={book}
            closeModal={hadleModalClose}
            btnLabel={"Start reading"}
          />,
          document.body
        )}
    </CardItemContainer>
  );
}
