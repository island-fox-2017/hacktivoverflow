<template>
  <div class="col-md-offset-4">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="question in questions">{{question.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: 'Questions Place',
      questions: []
    }
  },
  created: function () {
    let self = this
    axios.get('http://localhost:3000/question')
    .then((response) => {
      self.questions = response.data
    })
  }
}
</script>

<style>

</style>
