import axios from 'axios';

const fetchAllRepos = async (username) => {
  const perPage = 100; // Max per page allowed by GitHub
  let page = 1;
  let allRepos = [];
  let shouldFetchMore = true;

  while (shouldFetchMore) {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        per_page: perPage,
        page: page
      }
    });

    const repos = response.data;
    allRepos = allRepos.concat(repos);

    // Check if there's a next page
    const linkHeader = response.headers.link;
    if (linkHeader && linkHeader.includes('rel="next"')) {
      page += 1;
    } else {
      shouldFetchMore = false;
    }
  }

  return allRepos;
};

export const fetchFromAPI = () => {
  return fetchAllRepos('mostafahassan-dev');
}
