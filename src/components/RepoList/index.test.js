import React from "react";
import RepoList from "./index";
import { render, screen } from "@testing-library/react";

const repos = [
  {
    id: "1000",
    name: "Test Repo 1",
    description: "A dummy repo",
    link: "http://dummy.com",
    language: "CPP",
    stars: 10,
  },
  {
    id: "1001",
    name: "Test Repo 2",
    description: "Another dummy repo",
    link: "http://dummy2.com",
    language: "JAVA",
    stars: 10000,
  },
];

describe("repo list", () => {
  it("should render repo list", () => {
    render(
      <RepoList
        repos={repos}
        setFavouriates={() => {}}
        isFavouriate={() => {}}
      />
    );
    expect(screen.getByText("Test Repo 1")).toBeTruthy();
    expect(screen.getByText("Test Repo 2")).toBeTruthy();
  });
});
