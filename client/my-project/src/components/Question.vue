<template>
  <div class="list-group">
    <div v-for="question in listSummary" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.title}}</h4>
      <p class="list-group-item-text">{{question.content}} ....</p>
      <p class="list-group-item-text">Author: {{question.author.name}}</p>
      <hr>
      <router-link :to="{ name: 'details', params: { id: question._id} }">
        <button class="btn btn-success btn-sm" type="button" name="button">details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'question',
    computed: {
      listSummary: function () {
        const newData = this.$store.state.questions.map(function (question) {
          question.content = question.content.substr(0, 45)
          return question
        })
        return newData
      }
    }
  }
</script>
