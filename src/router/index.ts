import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import UserList from '../views/team/UserList.vue';
import UserProfile from '../views/team/UserProfile.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home/:username',
    props: true,
    name: 'home',
    component: Home,
    children: [
      {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile},
      {path: '/user/list', name: 'UserList', component: UserList},
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '*',
    name: '404Error',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
