import VueRouter from 'vue-router';

import Login from '../containers/Login';
import Register from '../containers/Register';
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
          path: 'create',
          component: CreateArticle
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
