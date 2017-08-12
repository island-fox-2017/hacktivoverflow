<template>
  <div class="col-md-6 verticalLine">
    <form class="form-horizontal" @submit.prevent="register()">
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.username" type="text" class="form-control" placeholder="Username" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.name" type="text" class="form-control" placeholder="Name" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.email" type="email" class="form-control" placeholder="Email" required>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input v-model="formRegis.password" type="password" class="form-control" placeholder="Password" required>
        </div>
      </div>
      <div class="form-group text-right">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-danger">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'header',
  data: function () {
    return {
      formRegis: {
        username: '',
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register: function () {
      const self = this
      axios.post('http://localhost:3000/user/register', {
        username: self.formRegis.username,
        name: self.formRegis.name,
        email: self.formRegis.email,
        password: self.formRegis.password
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
