import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import sidebarbalapan from '@/components/sidebarbalapan'
import Maincontent from '@/components/Maincontent'
import signin from '@/components/signin'
import signup from '@/components/signup'
import Question from '@/components/Question'
import Answer from '@/components/Answer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // ini utk yg awal = localhost:3000/
      name: 'Question',
      // ga kepake ky e..
      component: Question,
      // ini yg mau kita tampilin di path itu.. !!!
      // NAH disini trus kudu diimport ( taruh diatas !!! )
      children: [
        {
          path: '',
          component: Question
        },
        {
          path: ':id',
          component: Answer,
          props: true
        }
      ]
      // INI KEBAWAH YG KEPAKE UTK SHOW ANSWERRRR + ROUTER LINKKKK
    }, {    // test path answer idquestion
      path: '/answer/:id',
      component: Answer,
      props: true
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
    }
    // , {
    //   path: '/question',
    //   name: 'Question',
    //   component: Question
    // }
  ]
})
