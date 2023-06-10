import React from "react";
import Link from "next/link";
import { StyledHeader } from "../styles/Header.styled";

const Header = function () {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link href="/MainPage">Home page</Link>
          </li>
          <li>
            <Link href="/CreatePost">Create post</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
