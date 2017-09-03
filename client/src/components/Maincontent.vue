<template>
  <div class="col-md-offset-4">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="question in questions">{{question}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Maincontent Place',
      questions: []
    }
  },
  methods: {
    getQuestions () {
      this.$http.get('/question')
      .then(({data}) => {
        this.questions = data
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getQuestions()
  }
}
</script>

<style>

</style>
