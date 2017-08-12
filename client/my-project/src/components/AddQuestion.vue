<template>
  <div>
    <div class="form-group">
      <input v-model="formQuest.title" data-toggle="collapse" data-target="#demo" class="form-control" placeholder="Click Here to start new Question..." type="text">
    </div>
    <div class="collapse" id="demo">
      <div class="form-group">
        <textarea v-model="formQuest.content" class="form-control" placeholder="Content...." rows="3"></textarea>
      </div>
      <div class="form-group text-right">
        <button v-if="user" @click="postQuest()" type="button" class="btn btn-warning">Create Topic</button>
        <button v-else type="button" class="btn btn-danger" disabled>Login First</button>
        <button type="button" class="btn btn-default" data-toggle="collapse" data-target="#demo">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name: 'addquestion',
    props: ['questions', 'user'],
    data: function () {
      return {
        formQuest: {
          title: '',
          content: '',
          get author () {
            return localStorage.getItem('id')
          }
        }
      }
    },
    methods: {
      postQuest: function () {
        const self = this
        axios.post('http://localhost:3000/question', {
          title: self.formQuest.title,
          content: self.formQuest.content,
          author: self.formQuest.author
        })
        .then(response => {
          self.questions.push(response.data)
          self.formQuest.title = ''
          self.formQuest.content = ''
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
