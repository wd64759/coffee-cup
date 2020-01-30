import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import UserList from '../views/team/UserList.vue';
import UserProfile from '../views/team/UserProfile.vue';
import UserHome from '../views/team/UserHome.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home/:username',
    props: true,
    name: 'home',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'UserHome',
        component: UserHome,
        children: [
          {path: '/user/list', name: 'UserList', component: UserList},
          {path: '/user/:id', name: 'UserProfile', component: UserProfile},
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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
