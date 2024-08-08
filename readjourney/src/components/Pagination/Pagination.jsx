import {
  PaginationButton,
  PaginationContainer,
  PaginationSvg,
} from "./Pagination.styled";
import icon from "../../img/sprite.svg";

export default function Pagination({ totalPages, handlePageChange, page }) {
  return (
    <PaginationContainer>
      <PaginationButton
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <PaginationSvg stoke={page === 1 ? "true" : ""}>
          <use href={`${icon}#icon-chevron-left`} />
        </PaginationSvg>
      </PaginationButton>
      <PaginationButton
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <PaginationSvg stoke={page === totalPages ? "true" : ""}>
          <use href={`${icon}#icon-chevron-right`} />
        </PaginationSvg>
      </PaginationButton>
    </PaginationContainer>
  );
}
