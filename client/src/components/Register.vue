<template>
  <div>
    <div class="col-md-6">
      <form class="form-signup">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="your username">
        <label for="password">Password:</label>
        <input type="text" v-model="password" name="password" placeholder="your password">
        <button type="submit" @click="signUp()" class="btn btn-primary" name="button">Sign up Here</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const self = this
      axios.post('http://localhost:3000/registration/signup', {
        username: self.username,
        password: self.password
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
