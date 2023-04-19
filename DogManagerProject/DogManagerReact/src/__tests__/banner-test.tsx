import { fireEvent, render, screen } from "@testing-library/react";
import Banner from "../Components/Main/Banner";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Banner", () => {
  it("renders header correctly", () => {
    render(<Banner />, { wrapper: MemoryRouter });
    const header = screen.getByText(
      "DogManager is here to help you keep track with all your pet needs!"
    );
    expect(header).toBeInTheDocument();
  });

  it("nagivates to `getStarted` page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Banner />
      </Router>
    );
    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByText("START"));
    expect(history.location.pathname).toBe("/getStarted");
  });
});
