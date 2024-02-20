import '../../../mock/matchMedia.mock.js';
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "@/components/Profile";

describe("Profile Component", () => {
  it("renders a heading", () => {
    render(<Profile className="test" />);

    const heading = screen.getByText("Victor Lira");
    expect(heading).toBeInTheDocument();
  });
});