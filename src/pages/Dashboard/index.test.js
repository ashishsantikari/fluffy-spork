import { render, screen } from "@testing-library/react";
import Dashboard from "./index";

// TODO mock is not erroing out. fix this
/*jest.mock("../../hooks/usePopularRepositories", () => {
  return jest.fn(() => {
    return { repos: [], loading: false, error: null };
  });
});*/

describe("Dashboard page", () => {
  it("should render dashboard page", () => {
    render(<Dashboard />);
    expect(screen.getByTitle("headline")).toBeInTheDocument();
  });
});
