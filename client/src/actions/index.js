import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const API_URLS = {
  GET_ARTICLES_DATA: BASE_URL + '/articles?filter[include]=comments',
  CREATE_ARTICLE_COMMENT: BASE_URL + '/articles/:articleId/comments',
  PATCH_COMMENT: BASE_URL + '/comments/:commentId'
};

export const getArticles = () => {
  const url = API_URLS.GET_ARTICLES_DATA;
  return axios.get(url);
};

export const createArticleComment = (articleId, data) => {
  console.log(data);
  const url = API_URLS.CREATE_ARTICLE_COMMENT.replace(':articleId', articleId);
  return axios.post(url, data);
};

export const patchComment = (commentId, data) => {console.log(data);
  const url = API_URLS.PATCH_COMMENT.replace(':commentId', commentId);
  return axios.put(url, data);
};
