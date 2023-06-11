import React from "react";
import Header from "@/components/layout/Header";
import { StyledMainContent } from "./styles/MainContent.styled";

const MainPage = function () {
  return (
    <React.Fragment>
      <Header />
      <StyledMainContent>
        <h1>MainPage </h1>
      </StyledMainContent>
    </React.Fragment>
  );
};

export default MainPage;
