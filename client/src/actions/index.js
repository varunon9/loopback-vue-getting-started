import axios from 'axios';

import { getAuthHeaderConfig } from '../utils';

const BASE_URL = 'http://localhost:3000/api';

const API_URLS = {
  GET_ARTICLES_DATA: BASE_URL + '/articles?filter[include]=customUser&filter[include][comments]=comments&filter[include][comments]=customUser',
  CREATE_ARTICLE_COMMENT: BASE_URL + '/articles/:articleId/comments',
  PATCH_COMMENT: BASE_URL + '/comments/:commentId',
  USERS_LOGIN: BASE_URL + '/users/login',
  GET_USER: BASE_URL + '/users/:userId',
  USERS: BASE_URL + '/users',
  ARTICLES: BASE_URL + '/articles'
};

export const getArticles = () => {
  const url = API_URLS.GET_ARTICLES_DATA;
  return axios.get(url);
};

export const createArticleComment = (articleId, data) => {
  const url = API_URLS.CREATE_ARTICLE_COMMENT.replace(':articleId', articleId);
  return axios.post(url, data, getAuthHeaderConfig());
};

export const patchComment = (commentId, data) => {
  const url = API_URLS.PATCH_COMMENT.replace(':commentId', commentId);
  return axios.patch(url, data, getAuthHeaderConfig());
};

export const loginUser = data => {
  const url = API_URLS.USERS_LOGIN;
  return axios.post(url, data);
};

export const getUser = loginData => {
  let url = API_URLS.GET_USER.replace(':userId', loginData.userId);
  url += `?access_token=${loginData.id}`;
  return axios.get(url);
};

export const registerUser = data => {
  const url = API_URLS.USERS;
  return axios.post(url, data);
};

export const createArticle = data => {
  const url = API_URLS.ARTICLES;
  return axios.post(url, data, getAuthHeaderConfig());
};
