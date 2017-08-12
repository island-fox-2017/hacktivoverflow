<template>
  <div class="container-fluid">
    <headers :user="user" @gantiNama="ganti" @hapusNama="hapus"></headers>
    <MainContent :user="user" :questions="questions" :count="count"></MainContent>
  </div>
</template>

<script>
  import Headers from '@/components/Headers'
  import MainContent from '@/components/MainContent'
  import axios from 'axios'
  export default{
    name: 'home',
    components: {
      Headers,
      MainContent
    },
    data: function () {
      return {
        questions: '',
        user: ''
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
