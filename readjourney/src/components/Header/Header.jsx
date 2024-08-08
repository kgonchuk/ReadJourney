import {
  BtnLogout,
  HeaderContainer,
  NavContainer,
  NavigateLink,
  UserAvatar,
  UserBlock,
  UserName,
} from "./Header.styled";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authOperation";
import Notiflix from "notiflix";

import { selectUser } from "../../redux/auth/authSelectors";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name } = useSelector(selectUser);
  const userFirsLetter = name?.slice(0, 1).toUpperCase();

  const handleClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate("/register");
    } catch (error) {
      Notiflix.Notify.warning("Log out failed. Something went wrong.");
    }
  };
  return (
    <HeaderContainer>
      <Link to="/recommended">
        <Logo />
      </Link>

      <NavContainer>
        <NavigateLink to="/recommended" style={{ marginRight: 40 }}>
          Home
        </NavigateLink>
        <NavigateLink to="/library">My library</NavigateLink>
      </NavContainer>

      <UserBlock>
        <UserAvatar>{userFirsLetter}</UserAvatar>
        <UserName>{name}</UserName>
        <BtnLogout onClick={handleClick}>Log out</BtnLogout>
      </UserBlock>
    </HeaderContainer>
  );
}
