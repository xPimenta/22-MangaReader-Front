import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import * as S from "../styles/global.style.js";
import SearchBar from "./SearchBar.jsx";

import { MenuContext } from "../contexts/menu.context";
import { UserContext } from "../contexts/user.context";

import profilePic from "../assets/default-avatar.jpg";

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const { logUserOut, userInfo } = useContext(UserContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  function Navbar(props) {
    const { menuIsOpen } = useContext(MenuContext);

    return (
      <>
        {menuIsOpen ? (
          <nav onClick={handleMenuClick}>
            <ol></ol>
            <ul>{props.children}</ul>
          </nav>
        ) : (
          <nav onClick={handleMenuClick}>
            <ul>{props.children}</ul>
          </nav>
        )}
      </>
    );
  }

  function NavItem(props) {
    return <li>{props.children}</li>;
  }

  function LogoutArrow() {
    const { menuIsOpen } = useContext(MenuContext);
    return <>{!menuIsOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}</>;
  }

  function NavItemHidden(props) {
    const { menuIsOpen } = useContext(MenuContext);
    return <>{menuIsOpen && props.children}</>;
  }

  function DropLogout(props) {
    return <S.DropdownMenu>{props.children}</S.DropdownMenu>;
  }

  return (
    <S.Header>
      <Link to="/">
        <h1>Mangas</h1>
      </Link>
      <SearchBar />
      <Navbar onClick={handleMenuClick}>
        <NavItem>
          <LogoutArrow />
          <NavItemHidden>
            <DropLogout>
              <span onClick={logUserOut}>Logout</span>
            </DropLogout>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img src={userInfo.pictureUrl || profilePic} alt="pic" />
        </NavItem>
      </Navbar>
    </S.Header>
  );
}
