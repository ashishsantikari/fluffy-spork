import { useState, useEffect } from "react";
import { HTTPClient, HTTPClientError } from "../lib/HTTPClient";
import { resourceType } from "../enums/resources";
import { features } from "../features";

const usePopularRepositories = (pageNum = 1) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getDateQueryParam = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const month = date.getMonth() + 1;
    const mm = month < 10 ? `0${month}` : month;
    const dt = `${date.getFullYear()}-${mm}-${date.getDate()}`;
    return decodeURI(`>${dt}`);
  };

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

    function createURL() {
      const { apiHost: host } = features;
      const { repositories: resource } = resourceType;
      const dt = getDateQueryParam();
      return `${host}/search/${resource}?q=created:${dt}&sort=stars&order=desc&page=${pageNum}`;
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
          setError(null);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, [pageNum]);

  return { repos, loading, error };
};

export default usePopularRepositories;
