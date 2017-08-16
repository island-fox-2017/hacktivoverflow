<template>
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="username" type="text" class="form-control" placeholder="Username" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>
      <div class="form-group text-right">
        <div class="col-sm-12">
          <button type="button" class="btn btn-danger" @click="login()" data-dismiss="modal">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    props: ['user'],
    name: 'login',
    data: function () {
      return {
        username: '',
        password: '',
        status: ''
      }
    },
    methods: {
      setUser: function (name) {
        this.$emit('gantiNama', name)
      },
      login: function () {
        const self = this
        axios.post('http://localhost:3000/user/login', {
          username: self.username,
          password: self.password
        })
        .then(response => {
          console.log(response)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', response.data.name)
          self.setUser(response.data.name)
          self.username = ''
          self.password = ''
          self.status = 'modal'
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
