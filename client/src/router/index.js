import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import sidebarbalapan from '@/components/sidebarbalapan'
import Maincontent from '@/components/Maincontent'
import signin from '@/components/signin'
import signup from '@/components/signup'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Question',
      component: Question
    }, {    // just for edu
      path: '/side',
      name: 'sidebarbalapan',
      component: sidebarbalapan
    }, {
      path: '/main',
      name: 'Maincontent',
      component: Maincontent
    }, {
      path: '/login',
      name: 'signin',
      component: signin
    }, {
      path: '/signup',
      name: 'signup',
      component: signup
    }, {
      path: '/question',
      name: 'Question',
      component: Question
    }
  ]
})
