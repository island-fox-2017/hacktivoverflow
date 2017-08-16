<template lang="html">
  <div>
    <div class="form-group">
      <input v-model="formAnswer.content"  class="form-control" placeholder="Answer" type="text">
    </div>
    <div class="form-group text-right">
      <button @click="pushAnswers()" type="button" class="btn btn-warning">Answer</button>
      <button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formAnswer: {
        author: localStorage.getItem('id'),
        content: ''
      }
    }
  },
  computed: {
    id () {
      return this.$store.state.question._id
    }
  },
  methods: {
    ...mapActions([
      'pushAnswer'
    ]),
    pushAnswers () {
      console.log(this.id, 'ini ID')
      console.log(this.formAnswer)
      this.pushAnswer({data: this.formAnswer, id: this.id})
      this.formAnswer.content = ''
    }
  }
}
</script>

<style lang="css">
</style>
