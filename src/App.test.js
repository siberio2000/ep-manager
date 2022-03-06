import { render, screen } from "@testing-library/react";
import NavBar from "./components/NavBar";

// Unit test

describe("NavBar", () => {
  it("title should exist", async () => {
    render(<NavBar />);
    
    expect(await screen.findByText("Endpoints Manager")).toBeInTheDocument();
  });
});
