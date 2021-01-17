import React from "react";
import usePopularRepositories from "../../hooks/usePopularRepositories";
import RepoDetail from "../../components/RepoDetail";
import Text from "../../components/Text";
import Box from "../../components/Box";
import List from "../../components/List";
import { ListItem } from "../../components/List/ListItem";
import Pagination from "../../components/Pagination";

const Dashboard = () => {
  const [page, setPage] = React.useState(1);
  const [data, loading, err] = usePopularRepositories(page);
  const { items: repos } = data;

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  return (
    <Box>
      <Box paddingY="20px">
        <Text as="h2" textDecoration="underline">
          Most popular repositories of the week
        </Text>
      </Box>
      <Pagination
        inProgress={loading}
        currentPage={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
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
        {repos &&
          repos.map((repo) => (
            <ListItem paddingY="15px" key={repo.id}>
              <RepoDetail
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count || 0}
                link={repo.html_url}
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
