import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainContent from '@/components/MainContent'
import Question from '@/components/Question'
import Details from '@/components/QuestionDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: MainContent,
          children: [
            {
              path: '',
              component: Question
            },
            {
              name: 'details',
              path: '/details/:id',
              component: Details,
              props: true
            }
          ]
        }
      ]
    }
  ]
})
