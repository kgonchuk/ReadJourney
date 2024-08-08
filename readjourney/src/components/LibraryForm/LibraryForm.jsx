import LibDashboard from "../LibDashboard/LibDashboard";
import MyBooks from "../MyBooks/MyBooks";
import { LibraryContainer } from "./LibraryForm.styled";

export default function LibraryForm() {
  return (
    <LibraryContainer>
      <LibDashboard />
      <MyBooks />
    </LibraryContainer>
  );
}
