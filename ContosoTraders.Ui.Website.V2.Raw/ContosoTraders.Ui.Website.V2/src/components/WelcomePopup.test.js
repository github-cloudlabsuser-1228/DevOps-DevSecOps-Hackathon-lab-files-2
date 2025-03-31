import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup Component", () => {
  test("renders the welcome popup with the correct content", () => {
    render(<WelcomePopup />);
    expect(screen.getByText("WELCOME")).toBeInTheDocument();
    expect(screen.getByText("TO")).toBeInTheDocument();
    expect(
      screen.getByText("The DevSecOps Day 2 Hackathon!")
    ).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  test("closes the modal when the close button is clicked", () => {
    render(<WelcomePopup />);
    const closeButton = screen.getByText("Get Started");
    fireEvent.click(closeButton);
    expect(screen.queryByText("WELCOME")).not.toBeInTheDocument();
  });

  test("does not render the modal if showModal is false", () => {
    const { container } = render(<WelcomePopup />);
    const closeButton = screen.getByText("Get Started");
    fireEvent.click(closeButton);
    expect(container.querySelector(".modal")).toBeNull();
  });
});