import { LoaderContainer } from "./Loader.styled";
import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderContainer>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </LoaderContainer>
  );
}
