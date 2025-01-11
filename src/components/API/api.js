import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.baseURL = "https://api.unsplask.com";
// const KEY = "yUc5DXIQP33co1ra5iQZonfSid97FVKA7jUSQ4Sziqg";

const getFetchSearch = async (query, numberPage) => {
  const { data } = await axios(`search/photos`, {
    params: {
      query: query.trim(),
      hitsPerPage: 10,
      page: numberPage,
    },
    headers: {
      Authorization: `Client-ID ${"yUc5DXIQP33co1ra5iQZonfSid97FVKA7jUSQ4Sziqg"}`,
    },
  });

  return data;
};

export default getFetchSearch;
