import { render, screen } from "@testing-library/react";
import Dashboard from "./index";

// TODO: unable to mock usePopularRepositories for some reason.
describe("Dashboard page", () => {
  let jsdomScrollTo;

  beforeAll(() => {
    jsdomScrollTo = window.scrollTo;
    window.scrollTo = jest.fn().mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.mock("../../hooks/usePopularRepositories", () => {
      return jest.fn().mockReturnValue({ repos: [], loading: false });
    });
  });

  xit("should render dashboard page with repo details and language dropdown", async () => {
    render(<Dashboard />);
    expect(screen.getByTitle("headline")).toBeInTheDocument();
    expect(await screen.findByText("Test Repo 1")).toBeTruthy();
    expect(await screen.findByText("Test Repo 2")).toBeTruthy();
  });

  afterAll(() => {
    window.scrollTo = jsdomScrollTo;
  });
});
