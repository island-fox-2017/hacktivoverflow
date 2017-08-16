<template>
  <div class="list-group">
    <div v-for="question in listSummary" class="list-group-item">
      <div class="row">
        <div class="col-md-8">
          <h4 class="list-group-item-heading">{{question.title}}</h4>
        </div>
        <div class="col-md-4">
          <div><button @click="voting(question._id, question.author._id, 'up')" class="btn btn-danger btn-sm" type="button" name="button">
            <i class="glyphicon glyphicon-hand-up">Up</i></button> : {{question.upvotes.length}}
            <button @click="voting(question._id, question.author._id, 'down')" class="btn btn-warning btn-sm" type="button" name="button">
              <i class="glyphicon glyphicon-hand-down">Down</i></button> : {{question.downvotes.length}}
            </div>
          </div>
      </div>
      <div class="row">
        <hr>
        <div class="col-md-8">
          <router-link :to="{ name: 'details', params: { id: question._id} }">
            <button class="btn btn-success btn-sm" type="button" name="button">details</button>
          </router-link>
        </div>
        <div class="col-md-4">
          <h6 class="list-group-item-text">Author: {{question.author.name}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'question',
    computed: {
      listSummary: function () {
        return this.$store.state.questions
      }
    },
    methods: {
      ...mapActions([
        'voteQuestion'
      ]),
      voting (id, idUser, status) {
        this.voteQuestion({id, idUser, status})
      }
    }
  }
</script>
