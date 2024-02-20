// __tests__/ui/header.test.tsx
import '@testing-library/jest-dom';
import "next-router-mock";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "../../src/components/Header";

jest.mock("next/router", () => require("next-router-mock"));

describe("Portifolio", () => {
  test("a página possui a imagem de cabeçalho correta", () => {
    render(<Header />);
    
    const categoryElement = screen.getByText("Category");
    expect(categoryElement).toBeInTheDocument();
  });
});