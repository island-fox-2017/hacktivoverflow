<template>
  <div class="list-group">
    <div v-for="question in questions" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.title}}</h4>
      <p class="list-group-item-text">{{question.content}} ....</p>
      <router-link :to="{ name: 'details', params: { id: question._id} }">details</router-link>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'question',
    props: ['questions'],
    computed: {
      listSummary: function () {
        const newData = this.questions.map(function (question) {
          question.content = question.content.substr(0, 45)
          return question
        })
        return newData
      }
    }
  }
</script>
