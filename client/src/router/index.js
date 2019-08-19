import VueRouter from 'vue-router';

import Login from '../containers/Login';
import Register from '../containers/Register';
import ArticlesList from '../containers/articles/ArticlesList';
import ArticlesMain from '../containers/articles/ArticlesMain';
import CreateArticle from '../containers/articles/CreateArticle';
import Article from '../containers/articles/Article';

import { customLocalStorage } from '../utils';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      beforeEnter: () => {
        router.push({
          path: 'articles'
        });
      }
    },
    {
      path: '/articles',
      component: ArticlesMain,
      children: [
        {
          path: '',
          component: ArticlesList
        },
        {
          path: 'create',
          component: CreateArticle,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: ':id',
          component: Article
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      beforeEnter: () => {
        // clear user data from localstorage
        customLocalStorage.removeItem('user');
        router.push({
          path: 'login'
        });
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // check if user is logged in
    const user = customLocalStorage.getItem('user');

    if (user) {
      // logged in
      next();
    } else {
      // not logged in
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
});

export default router;
