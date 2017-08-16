import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const initialState = {
  questions: [],
  question: '',
  userId: localStorage.getItem('id'),
  username: localStorage.getItem('name')
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  getters: {
    getCountQuest (state) {
      return state.questions.length
    }
  },
  mutations: {
    clearState (state) {
      state.userId = ''
      state.username = ''
      localStorage.clear()
    },
    setUser (state, payload) {
      state.username = payload
    },
    setId (state, payload) {
      state.userId = payload
    },
    setQuestion (state, payload) {
      state.question = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    },
    pushQuestion (state, payload) {
      state.questions.push(payload)
    },
    pushAnswer (state, payload) {
      console.log(payload.id, 'ini id')
      let newData = state.questions.map(function (question) {
        console.log(question._id, 'question')
        if (question._id === payload.id) {
          console.log('waw')
          question.answer.push(payload.data)
          return question
        } else {
          return question
        }
      })
      state.questions = newData
    }
  },
  actions: {
    getAllQuestions ({ commit }) {
      axios.get('http://localhost:3000/question')
      .then(response => {
        commit('setQuestions', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    pushQuestions ({ commit }, data) {
      axios.post('http://localhost:3000/question', {
        title: data.title,
        content: data.content,
        author: data.author
      })
      .then(response => {
        commit('pushQuestion', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    pushAnswer (context, payload) {
      axios.post(`http://localhost:3000/question/${payload.id}/answer`, {
        author: payload.data.author,
        content: payload.data.content
      })
      .then(response => {
        var id = payload.id
        context.dispatch('getOneQuestion', id)
        context.commit('pushAnswer', {data: payload.data, id: id})
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneQuestion ({ commit }, id) {
      axios.get(`http://localhost:3000/question/${id}`)
      .then(response => {
        commit('setQuestion', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    voteQuestion ({ commit, dispatch }, payload) {
      console.log(payload)
      axios.put(`http://localhost:3000/question/${payload.id}/${payload.idUser}`, {
        status: payload.status
      })
      .then(response => {
        dispatch('getAllQuestions')
        console.log('sukses vote')
      })
      .catch(err => {
        console.log(err)
      })
    },
    loginTo ({ commit }, payload) {
      axios.post('http://localhost:3000/user/login', {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', response.data.name)
          commit('setUser', response.data.name)
          commit('setId', response.data.id)
        } else {
          alert('User not found or wrong password')
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    logoutFrom ({ commit }) {
      commit('clearState')
    }
  }
})
