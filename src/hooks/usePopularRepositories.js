import { useState, useEffect } from "react";
import { HTTPClient, HTTPClientError } from "../lib/HTTPClient";
import { resourceType } from "../enums/resources";
import { features } from "../features";
import { getSearchParam } from "../lib/queryParams";

const usePopularRepositories = (queryParams = {}, pageNum = 1) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    function formatResponse(repoList) {
      return repoList.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        link: repo.html_url,
        language: repo.language,
      }));
    }

    function createURL() {
      const { apiHost: host } = features;
      const { repositories: resource } = resourceType;
      return `${host}/search/${resource}?q=${getSearchParam(
        queryParams
      )}&sort=stars&order=desc&page=${pageNum}`;
    }

    const httpClient = new HTTPClient();

    setLoading(true);
    httpClient.get(createURL(), {}).then((data) => {
      switch (data instanceof HTTPClientError) {
        case true:
          setError(data);
          break;
        default:
          setRepos(formatResponse(data.items));
          setError(null);
      }
      setLoading(false);
      return data;
    });
  }, [queryParams, pageNum]);

  return { repos, loading, error };
};

export default usePopularRepositories;
