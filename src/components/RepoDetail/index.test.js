import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RepoDetail from "./index";

const defaultProps = {
  id: "demo-id",
  name: "repo-name",
  description: "some description",
  link: "http://google.com",
  stars: 5,
  toggleFavouriate: () => {},
  isFavouriate: false,
};

let props;

describe("RepoDetail component", () => {
  beforeEach(() => {
    props = { ...defaultProps };
  });

  it("renders the component", () => {
    render(<RepoDetail {...props} />);
    expect(screen.getByText("repo-name")).toBeTruthy();
  });

  it("should fire event when clicked on favouriate button", () => {
    const toggleFavFn = jest.fn();
    props = { ...props, toggleFavouriate: toggleFavFn };
    const eventHandlerData = {
      id: props.id,
      name: props.name,
      description: props.description,
      stars: props.stars,
      link: props.link,
    };
    render(<RepoDetail {...props} />);
    const btn = screen.getByTitle("mark-favourite");
    userEvent.click(btn);
    expect(toggleFavFn).toBeCalledWith(eventHandlerData);
  });

  it("should follow link to the repo", () => {
    render(<RepoDetail {...props} />);
    const repoLink = screen.getByRole("link", props.name);
    expect(repoLink).toHaveAttribute("href", props.link);
  });
});
