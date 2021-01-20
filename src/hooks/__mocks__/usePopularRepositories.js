let popularRepos = jest.createMockFromModule("../usePopularRepositories.js");

popularRepos = {
  repos: [],
  loading: false,
};

export default popularRepos;
