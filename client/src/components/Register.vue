<template>
  <div>
    <div class="col-md-6">
      <form class="form-signup">
        <label for="username">Fullname:</label>
        <input type="text" v-model="fullname" placeholder="your fullname">
        <label for="password">Email:</label>
        <input type="text" v-model="email" name="email" placeholder="your email">
        <label for="username">Username:</label>
        <input type="text" v-model="username" placeholder="your username">
        <label for="password">Password:</label>
        <input type="text" v-model="password" name="password" placeholder="your password">
        <button type="submit" @click="signUp" class="btn btn-primary" name="button">Sign up Here</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fullname: '',
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const self = this
      axios.post('http://localhost:3000/registration/signup', {
        fullname: self.fullname,
        email: self.email,
        username: self.username,
        password: self.password
      })
      .then(response => {
        console.log(response)
        // this.$router.push('/login')
        // ga pake soal di modal.. ga redirect ke /login
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
