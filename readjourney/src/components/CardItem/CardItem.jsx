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
} from "./CardItem.styled";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AddModal from "../ModalWindow/AddModal";

export default function CardItem({
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
        <BookImg src={notFoundImg} alt="not found" />
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
            btnLabel={"Add to library"}
          />,
          document.body
        )}
    </CardItemContainer>
  );
}
