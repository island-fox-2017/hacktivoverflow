<template>
  <div class="container-fluid">
    <headers :user="user" @gantiNama="ganti" @hapusNama="hapus"></headers>
    <router-view :user="user" :questions="questions" :count="count"></router-view>
  </div>
</template>

<script>
  import Headers from '@/components/Headers'
  import axios from 'axios'
  export default{
    name: 'home',
    components: {
      Headers
    },
    data: function () {
      return {
        questions: '',
        user: localStorage.getItem('name')
      }
    },
    computed: {
      count: function () {
        return this.questions.length
      }
    },
    methods: {
      ganti: function (name) {
        this.user = name
      },
      hapus: function () {
        this.user = ''
      }
    },
    mounted: function () {
      const self = this
      axios.get('http://localhost:3000/question')
      .then(response => {
        self.questions = response.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>
