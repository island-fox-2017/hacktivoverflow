<template>
  <b-tabs class="middle">
    <b-tab title="Register">
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Name</p>
        <b-form-input v-model="regName" type="text" placeholder="Enter your name"></b-form-input>

        <br>
        <p style="text-align: left">Email</p>
        <b-form-input v-model="regEmail" type="email" placeholder="Enter your email"></b-form-input>

        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="regPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" href="" @click="doRegister">Register</b-button>
      </div>
      <div v-if="regStat">
        <b-alert :show="dismissCountDown" variant="success">
            <strong>Congratulation!</strong> You have successfully registered.
        </b-alert>
      </div>
    </b-tab>
    <b-tab title="Login" >
      <div style="padding: 20px">
        <br>
        <p style="text-align: left">Email</p>
        <b-form-input v-model="logEmail" type="email" placeholder="Enter your email"></b-form-input>

        <br>
        <p style="text-align: left">Password</p>
        <b-form-input v-model="logPassword" type="password" placeholder="Enter your password"></b-form-input>
        <br>
        <b-button variant="primary" href="" @click="doLogin">Login</b-button>
      </div>
    </b-tab>

    <div v-if="failedLog">
      <b-alert :show="dismissCountDown" variant="warning">
          <strong>Failed!</strong> Wrong email or password
      </b-alert>
    </div>
    <div v-if="failedReg">
      <b-alert :show="dismissCountDown" variant="warning">
          <strong>Failed!</strong> Please Check Your Input Data.<br>
          Or it looks like your email has already been used by another user
      </b-alert>
    </div>
  </b-tabs>
</template>

<script>
export default {
  data () {
    return {
      regName: null,
      regEmail: null,
      regPassword: null,
      regStat: false,
      failedReg: false,
      logEmail: null,
      logPassword: null,
      logStat: false,
      failedLog: false,
      dismissCountDown: null
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    doRegister () {
      var self = this
      this.axios.post('http://localhost:3000/signup', {
        name: self.regName,
        email: self.regEmail,
        password: self.regPassword
      })
      .then(function (response) {
        if (response.data._id) {
          self.regName = ''
          self.regEmail = ''
          self.regPassword = ''
          self.regStat = true
          self.dismissCountDown = 5
        } else {
          self.failedReg = true
          self.dismissCountDown = 5
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedReg = true
        self.dismissCountDown = 5
      })
    },
    doLogin () {
      var self = this
      this.axios.post('http://localhost:3000/login', {
        email: self.logEmail,
        password: self.logPassword
      })
      .then(function (response) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
          self.$router.push('/')
        } else {
          self.failedLog = true
          self.dismissCountDown = 5
        }
      })
      .catch(function (err) {
        console.log(err)
        self.failedLog = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
  width: 400px;
  margin: auto;
}
</style>
