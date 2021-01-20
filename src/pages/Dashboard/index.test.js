import { render, screen } from "@testing-library/react";
import Dashboard from "./index";

describe("Dashboard page", () => {
  let jsdomScrollTo;
  beforeAll(() => {
    jsdomScrollTo = window.scrollTo;
    window.scrollTo = jest.fn().mockImplementation(() => {});

    jest.mock("../../hooks/usePopularRepositories", () => {
      return jest
        .fn()
        .mockReturnValue({ repos: [], loading: false, error: null });
    });
  });

  afterAll(() => {
    window.scrollTo = jsdomScrollTo;
  });

  it("should render dashboard page", () => {
    render(<Dashboard />);
    expect(screen.getByTitle("headline")).toBeInTheDocument();
  });
});
