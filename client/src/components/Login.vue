<template>
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-sm-2">Username:</label>
        <div class="col-sm-10">
          <input type="username" v-model="username" class="form-control" placeholder="your username">
        </div>
      <div class="form-group">
        <label class="control-label col-sm-2">Password:</label>
        <div class="col-sm-10">
          <input type="password" v-model="password" class="form-control" placeholder="your password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-info" @click="masuk" data-dismiss="modal">Login</button>
        </div>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      token: ''
    }
  },
  methods: {
    masuk: function () {
      console.log('submit jalan')
      var self = this
      axios.post('http://localhost:3000/registration/signin', {
        username: self.username,
        password: self.password
      })
    .then(response => {
      console.log('harusnya ada token ', response.data.token)
      localStorage.setItem('token', response.data.token)
    })
    }
  }
}
</script>

<style>

</style>
