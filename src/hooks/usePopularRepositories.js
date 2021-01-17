import { useState, useEffect } from "react";
import { HTTPClient, HTTPClientError } from "../lib/HTTPClient";
import { resourceType } from "../enums/resources";

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

    // TODO simplify this url thingy
    const HOST_URL = "https://api.github.com";
    const fetchRepoURL = `${HOST_URL}/search/${
      resourceType.repositories
    }?q=created:${getDateQueryParam()}&sort=stars&order=desc&page=${pageNum}`;

    const httpClient = new HTTPClient();
    httpClient
      .get(fetchRepoURL, {}, () => setLoading(true))
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
