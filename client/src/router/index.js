import VueRouter from 'vue-router';

import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Articles from '../containers/Articles';

import { customLocalStorage } from '../utils';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
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
      path: '/articles',
      name: 'Articles',
      component: Articles
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // check if user is logged in
    const user = customLocalStorage.getItem('user');

    if (user) {
      // logged in
      console.log(user); // todo
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
