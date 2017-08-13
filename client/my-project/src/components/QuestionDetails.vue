<template>
  <div class="list-group">
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.title}}</h4>
      <p class="list-group-item-text">{{question.content}}</p>
    </a>
    <a v-for="answer in question.answer" href="#" class="list-group-item">
      <p class="list-group-item-text">{{answer.content}}</p>
    </a>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    props: ['id'],
    data: function () {
      return {
        question: ''
      }
    },
    mounted: function () {
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
