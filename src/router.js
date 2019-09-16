import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos.vue'
import DoneTodos from "./views/DoneTodos";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
    {
      path: '/done-todos',
      name: 'done-todos',
      component: DoneTodos
    }
  ]
});
