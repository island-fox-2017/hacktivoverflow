<template>
  <div class="list-group">
    <div class="panel panel-primary">
      <div class="panel-heading">{{question.title}}</div>
      <div class="panel-body">
        <div class="col-md-9">
          {{question.content}}
        </div>
        <div class="col-md-3 text-center">
          By: {{question.author.name}}
        </div>
      </div>
      <div class="panel-footer">
        <div>
          <button @click="voting(question._id, userId, 'up')" class="btn btn-danger btn-sm" type="button" name="button">
            <i class="glyphicon glyphicon-hand-up">Up</i>
          </button> : {{question.upvotes.length}}
          <button @click="voting(question._id, userId, 'down')" class="btn btn-warning btn-sm" type="button" name="button">
            <i class="glyphicon glyphicon-hand-down">Down</i>
          </button> : {{question.downvotes.length}}
        </div>
      </div>
    </div>

    <div v-for="answer in question.answer" class="panel panel-info">
      <div class="panel-heading">from: {{answer.author.name}}</div>
      <div class="panel-body">
        {{answer.content}}
      </div>
      <div class="panel-footer">
        <button @click="votingAnswer(question._id, userId, answer._id, 'up')" class="btn btn-danger btn-sm" type="button" name="button">
          <i class="glyphicon glyphicon-hand-up">Up</i>
        </button> : {{answer.upvotes.length}}
        <button @click="votingAnswer(question._id, userId, answer._id, 'down')" class="btn btn-warning btn-sm" type="button" name="button">
          <i class="glyphicon glyphicon-hand-down">Down</i>
        </button> : {{answer.downvotes.length}}
      </div>
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
      },
      userId () {
        return this.$store.state.userId
      }
    },
    components: {
      AddAnswer
    },
    methods: {
      ...mapActions([
        'getOneQuestion',
        'voteQuestion',
        'voteAnswer'
      ]),
      voting (id, idUser, status) {
        this.voteQuestion({id, idUser, status})
      },
      votingAnswer (id, iduser, idanswer, status) {
        this.voteAnswer({id, iduser, idanswer, status})
      }
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
