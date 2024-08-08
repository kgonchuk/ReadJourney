import { selectOwnBooks } from "../../redux/books/booksSelector";

import {
  BookList,
  BooksHeader,
  MyBookWrap,
  MyBooksContainer,
  MyBooksTitle,
} from "./MyBooks.styled";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { useEffect, useState } from "react";
import { ownBooks } from "../../redux/books/booksOperation";
import NoBooks from "../NoBooks/NoBooks";
import MainContainer from "../MainContainer/MainContainer";
import BookDetails from "../BookDetails/BookDetails";

export default function MyBooks() {
  const userLib = useSelector(selectOwnBooks);
  const [selectedBooks, setSelectedBooks] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ownBooks());
  }, [dispatch]);

  const handleSelectedBooks = (e) => {
    setSelectedBooks(e);
    if (e === "Done") dispatch(ownBooks("done"));
    if (e === "In progress") dispatch(ownBooks("in-progress"));
    if (e === "Unread") dispatch(ownBooks("unread"));
    if (e === "All books") dispatch(ownBooks());
  };
  return (
    <MainContainer>
      <MyBookWrap>
        <BooksHeader>
          <MyBooksTitle>My Library</MyBooksTitle>
          <DropDownMenu
            selectedBooks={selectedBooks}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleSelectedBooks={handleSelectedBooks}
          />
        </BooksHeader>
        {userLib.length === 0 ? (
          <NoBooks place="MyLibraryBooks" />
        ) : (
          <BookList>
            {Array.isArray(userLib) &&
              userLib.map((book) => (
                <BookDetails
                  key={book._id}
                  book={book}
                  currentPage="Mylibrary"
                />
              ))}
          </BookList>
        )}
      </MyBookWrap>
    </MainContainer>
  );
}
