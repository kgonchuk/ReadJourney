import {
  ArrowIcon,
  DropdownContainer,
  OptionItem,
  OptionList,
  ToggleButton,
} from "./DropDownMenu.styled";
import icon from "../../img/sprite.svg";
import { useEffect, useRef } from "react";

const options = ["Unread", "In progress", "Done", "All books"];

export default function DropDownMenu({
  selectedBooks,
  handleSelectedBooks,
  isOpen,
  setIsOpen,
}) {
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOpenClick = (book) => {
    handleSelectedBooks(book);
    setIsOpen(false);
  };
  return (
    <DropdownContainer ref={selectRef}>
      <ToggleButton onClick={toggleOpen}>
        {selectedBooks || "All books"}
        <ArrowIcon width={16} height={16}>
          <use href={`${icon}#icon-chevron-${isOpen ? "upp" : "down"}`} />
        </ArrowIcon>
      </ToggleButton>
      <OptionList open={isOpen}>
        {options.map((book) => (
          <OptionItem key={book} onClick={() => handleOpenClick(book)}>
            {book}
          </OptionItem>
        ))}
      </OptionList>
    </DropdownContainer>
  );
}
