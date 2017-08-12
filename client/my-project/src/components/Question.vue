<template>
  <div class="list-group">
    <a v-for="question in questions" href="#" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.title}}</h4>
      <p class="list-group-item-text">{{question.content}} ....</p>
    </a>
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
