<template>
  <div class="col-md-6">
    <form class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-sm-2">Username:</label>
        <div class="col-sm-10">
          <input type="username" class="form-control" placeholder="your username">
        </div>
      <div class="form-group">
        <label class="control-label col-sm-2">Password:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" placeholder="your password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-info">Login</button>
        </div>

      </div>
      </div>

    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
