import React from "react";
import Link from "next/link";
import  StyledHeader  from "./Header.styled";

const Header = function () {
  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/CreatePost">Create post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
