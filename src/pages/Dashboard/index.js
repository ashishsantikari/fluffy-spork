import React, { useEffect, useState } from "react";
import useFavourites from "../../hooks/useFavourites";
import usePopularRepositories from "../../hooks/usePopularRepositories";
import useLanguages from "../../hooks/useLanguages";
import Pagination from "../../components/Pagination";
import Text from "../../components/Text";
import Box from "../../components/Box";
import Title from "../../components/Title";
import RepoList from "../../components/RepoList";
import Page from "../../components/Page";
import { getDateParam } from "../../lib/queryParams";
import Dropdown from "../../components/Dropdown";

const Dashboard = () => {
  const [page, setPage] = React.useState(1);
  const [queryParams, setQueryParams] = useState(() => {
    return {
      language: "",
      created: getDateParam(),
    };
  });

  const { repos, loading, error } = usePopularRepositories(queryParams, page);
  const [favourites, setFavourites] = useFavourites();
  const { languages, setLanguages } = useLanguages();

  const filterByLanguage = (event) => {
    setQueryParams((store) => ({
      ...store,
      language: event.target.value,
    }));
    // TODO setting page to 1 on change in language. date is constant as of now
    setPage(1);
  };

  const goToNextPage = () => {
    setPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setPage((page) => page - 1);
  };

  const isFavouriate = (repoId) => {
    return favourites.some((repo) => repo.id === repoId);
  };

  useEffect(() => {
    function saveLanguages(repoList) {
      setLanguages((languages) => {
        const fetchedLang = repoList
          .map((repo) => repo.language)
          .filter(Boolean);
        const newList = [...languages];
        fetchedLang.forEach((lang) => {
          if (newList.indexOf(lang) < 0) newList.push(lang);
        });
        return newList;
      });
    }

    if (repos.length) {
      saveLanguages(repos);
    }
    // TODO Quick hack. Smooth animation required.
    window.scrollTo(0, 0);
  }, [repos, error, setLanguages]);

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
      <Box width="100%">
        <Text paddingRight="10px" outline="none">
          Filter by language
        </Text>
        <Dropdown list={languages} onChange={filterByLanguage} />
      </Box>
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
