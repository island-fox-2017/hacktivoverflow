<template>
  <div class="col-md-6">
    <h1>{{title}}</h1>
    <!-- <ul> -->
      <!-- <li v-for="question in questions">{{question.title}} The author: {{question.author.fullname}} </li> -->
      <!-- <li v-for="question in questions">{{question}} </li>
    </ul> -->

    <div class="w3-container">
      <h2>hacktivoverflow List of Questions: </h2>
      <div class="container" v-for="question in questions">
        <div class="w3-card-4" style="width:50%;">
          <header class="w3-container w3-blue">
            <h1>{{question.title}}</h1>
          </header>
          <div class="w3-container">
            <p>The author: {{question.author.fullname}}</p>
            <p>Content: {{question.content}}</p>
            <!-- <p>answer: {{question.answers[0].content}}</p>
            <p>answered by: {{question.answers[0].author.fullname}}</p> -->
          </div>
          <footer class="w3-container w3-blue">
            <!-- disini jadi tempat modal EDITING e -->
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Edit</button>
        <!-- modal -->
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- modal content e -->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h3 class="modal-title">Edit task:</h3>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label class="control-label col-md-6">Task:</label>
                    <input type="text" v-model="taskname" class="form-control" placeholder="new task">
                    <button type="button" class="btn" @click="updateTask(task._id)" data-dismiss="modal">submit</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
<!-- modal edit end -->

        <a v-on:click="deleteTask(task._id)" class="btn-floating waves-effect waves-light red" style="margin-left: 8px"><i class="material-icons">delete</i></a>

        <!-- Taruh router link utk nampilin Answer -->
            <router-link :to="'/answer/'+question._id">Show Answer</router-link>
          </footer>
        </div>
      </div>
    </div>

<!-- <app-answer/> -->

  </div>
</template>

<script>
import axios from 'axios'
// import Answer from '@/components/Answer'
export default {
  // components: {
  //   'app-answer': Answer
  // },
  data () {
    return {
      title: 'List Questions',
      questions: []
    }
  },
  created: function () {
    let self = this
    axios.get('http://localhost:3000/question')
    .then((response) => {
      self.questions = response.data
    })
  }
  // ,
  // // start here for CUD, Read diatas
  // methods: {
  //   addQuestion: function() {
  //     let self = this;
  //     axios.post('http://localhost:3000/question', {
  //       // sini blm kelar..
  //     })
  //   }
  // }
}
</script>

<style>

</style>
