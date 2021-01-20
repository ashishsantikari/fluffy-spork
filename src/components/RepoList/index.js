import React from "react";
import { ListItem } from "../List/ListItem";
import List from "../List";
import RepoDetail from "../RepoDetail";

const RepoList = ({ repos, setFavouriates, isFavouriate, infoMessage }) => {
  return (
    <>
      {infoMessage && infoMessage()}
      <List listStyleType="none" marginY="20px">
        {repos.map((repo) => (
          <ListItem key={repo.id}>
            <RepoDetail
              id={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stars || 0}
              link={repo.link}
              toggleFavouriate={setFavouriates}
              isFavouriate={isFavouriate(repo.id)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default RepoList;
