import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const API_URLS = {
  ARTICLES: BASE_URL + '/articles'
};

export const getArticles = () => {
  const url = API_URLS.ARTICLES;
  return axios.get(url);
};
