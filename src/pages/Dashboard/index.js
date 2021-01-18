import React from "react";
import useFavourites from "../../hooks/useFavourites";
import usePopularRepositories from "../../hooks/usePopularRepositories";
import Pagination from "../../components/Pagination";
import Text from "../../components/Text";
import Box from "../../components/Box";
import Title from "../../components/Title";
import RepoList from "../../components/RepoList";
import Page from "../../components/Page";

const Dashboard = () => {
  const [page, setPage] = React.useState(1);
  const { repos, loading, error } = usePopularRepositories(page);
  const [favourites, setFavourites] = useFavourites();

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  const isFavouriate = (repoId) => {
    return favourites.some((repo) => repo.id === repoId);
  };

  return (
    <Page>
      <Title headline={"Most popular repositories of the week"} />
      {loading && (
        <Text as="h2" color="blue">
          Loading....
        </Text>
      )}
      {error && (
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
            {error.message}
          </Text>
        </Box>
      )}
      <RepoList
        repos={repos}
        isFavouriate={isFavouriate}
        setFavouriates={setFavourites}
      />
      <Pagination
        inProgress={loading}
        currentPage={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </Page>
  );
};

export default Dashboard;
