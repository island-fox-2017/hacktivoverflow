<template>
  <div class="container">
    <!-- <p> {{question.answers}} </p> -->
    <!-- <p> {{question.title}} </p> -->
    <a v-for="answer in question.answers" href="#" class="list-group-item">
      <p class="list-group-item-text">{{answer.content}}</p>
      <p class="list-group-item-text">{{answer.author.fullname}}</p>
    </a>
    <!-- List Answers:
    <p>answer: {{question.answers[0].content}}</p>
    <p>answered by: {{question.answers[0].author.fullname}}</p> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      question: ''
      // karena cuma per 1 question ( by id )
    }
  },
  created: function () {
    const self = this
    axios.get(`http://localhost:3000/question/${this.id}`)
    .then(response => {
      self.question = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
