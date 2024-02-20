import '../../../mock/matchMedia.mock.js';
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMe from "@/pages/AboutMe";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("../../../mock/matchMedia.mock.js");

describe("Portifolio", () => {
  test("a página possui a imagem de cabeçalho correta", () => {
    render(<AboutMe />);
    
    const categoryElement = screen.getByText("Victor Lira");
    expect(categoryElement).toBeInTheDocument();
  });
});