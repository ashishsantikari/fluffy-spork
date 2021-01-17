import React from "react";
import produce from "immer";
import RepoDetail from "../../components/RepoDetail";
import Text from "../../components/Text";
import Box from "../../components/Box";
import List from "../../components/List";
import { ListItem } from "../../components/List/ListItem";
import Pagination from "../../components/Pagination";
import useLocalStorage from "../../hooks/useLocalStorage";
import usePopularRepositories from "../../hooks/usePopularRepositories";

const Dashboard = () => {
  const [page, setPage] = React.useState(1);
  const { repos, loading, err } = usePopularRepositories(page);
  const [storedValue, setStoredValue] = useLocalStorage("fav-repos");

  const toggleFavouriate = ({ id, name, description, stars, link }) => {
    const item = { id, name, description, stars, link };
    setStoredValue(
      produce((draft) => {
        const idx = draft.findIndex((item) => item.id === id);
        if (idx > -1) {
          draft.splice(idx, 1);
        } else {
          draft.push(item);
        }
      })
    );
  };

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  const isFavouriate = (repoId) => {
    return storedValue.some((repo) => repo.id === repoId);
  };

  return (
    <Box>
      <Box paddingY="20px">
        <Text as="h2" textDecoration="underline" title="headline">
          Most popular repositories of the week
        </Text>
      </Box>
      <Box>
        <Pagination
          inProgress={loading}
          currentPage={page}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
        />
      </Box>
      <List listStyleType="none" marginY="20px">
        {loading && (
          <Text as="h2" color="blue">
            Loading....
          </Text>
        )}
        {err && (
          <Box
            marginY="10px"
            paddingY="20px"
            paddingLeft="10px"
            borderColor="black"
            borderWidth="2px"
            borderStyle="solid"
            borderRadius="5px"
            backgroundColor="black"
            width="100%"
          >
            <Text textTransform="uppercase" color="white">
              {err.message}
            </Text>
          </Box>
        )}
        {repos.map((repo) => (
          <ListItem paddingY="15px" key={repo.id}>
            <RepoDetail
              id={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stargazers_count || 0}
              link={repo.html_url}
              toggleFavouriate={toggleFavouriate}
              isFavouriate={isFavouriate(repo.id)}
            />
          </ListItem>
        ))}
      </List>
      <Pagination
        inProgress={loading}
        currentPage={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </Box>
  );
};

export default Dashboard;
