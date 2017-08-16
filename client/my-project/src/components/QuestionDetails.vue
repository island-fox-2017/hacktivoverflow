<template>
  <div class="list-group">
    <div href="#" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.title}}</h4>
      <p class="list-group-item-text">{{question.content}}</p>
      <p class="list-group-item-text">By: {{question.author.name}}</p>
    </div>
    <div v-for="answer in question.answer" href="#" class="list-group-item">
      <p class="list-group-item-text">{{answer.content}}</p>
      <p class="list-group-item-text">by: {{answer.author.name}}</p>
    </div>
    <AddAnswer></AddAnswer>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import AddAnswer from '@/components/AddAnswer'
  export default{
    props: ['id'],
    computed: {
      question () {
        return this.$store.state.question
      }
    },
    components: {
      AddAnswer
    },
    methods: {
      ...mapActions([
        'getOneQuestion'
      ])
    },
    created () {
      this.getOneQuestion(this.id)
      // const self = this
      // axios.get(`http://localhost:3000/question/${this.id}`)
      // .then(response => {
      //   self.question = response.data
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }
</script>
