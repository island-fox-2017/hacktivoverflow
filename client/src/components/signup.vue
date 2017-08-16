<template>
  <div>
    <div class="col-md-4">
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

 <!-- bedane submit di form dengan @click di button?? -->

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      this.$http.post('/registration/signup', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        this.$router.push('/login')
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
