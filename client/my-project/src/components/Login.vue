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
  import { mapActions } from 'vuex'
  export default{
    name: 'login',
    data: function () {
      return {
        username: '',
        password: '',
        status: ''
      }
    },
    methods: {
      ...mapActions([
        'loginTo'
      ]),
      login: function () {
        this.loginTo({username: this.username, password: this.password})
        this.username = ''
        this.password = ''
      }
    }
  }
</script>
