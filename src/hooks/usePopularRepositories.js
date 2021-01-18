import { useState, useEffect } from "react";
import { HTTPClient, HTTPClientError } from "../lib/HTTPClient";
import { resourceType } from "../enums/resources";
import { features } from "../features";
import useLanguages from "./useLanguages";
import { getSearchParam } from "../lib/queryParams";

const usePopularRepositories = (queryParams = {}, pageNum = 1) => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useLanguages();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function formatResponse(repoList) {
      return repoList.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        link: repo.html_url,
      }));
    }

    function saveLanguages(repoList) {
      const newLanguages = repoList
        .map((repo) => repo.language)
        .filter(Boolean);
      const languageList = new Set([...newLanguages, ...languages]);
      setLanguages(Array.from(languageList));
    }

    function createURL() {
      const { apiHost: host } = features;
      const { repositories: resource } = resourceType;
      return `${host}/search/${resource}?q=${getSearchParam(
        queryParams
      )}&sort=stars&order=desc&page=${pageNum}`;
    }
    const apiURL = createURL();

    const httpClient = new HTTPClient();
    httpClient
      .get(apiURL, {}, () => setLoading(true))
      .then((data) => {
        if (data instanceof HTTPClientError) {
          setError(data);
        } else {
          setRepos(formatResponse(data.items));
          saveLanguages(data.items);
          setError(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, [queryParams, pageNum]);

  return { repos, loading, error };
};

export default usePopularRepositories;
