import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'
import Events from '../views/Events'
import Teams from '../views/Teams'
import Users from '../views/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
