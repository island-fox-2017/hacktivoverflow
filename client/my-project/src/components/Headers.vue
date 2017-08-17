<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacktiv Overflow</a>
      </div>

      <div class="collapse navbar-collapse">
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input class="form-control" placeholder="Search" type="text">
          </div>
          <button type="submit" class="btn btn-danger"><i class="glyphicon glyphicon-search"></i></button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="user"><a @click="logout()"> Hai, {{user}} | Logout </a></li>
          <li v-else><a href="#" data-toggle="modal" data-target="#myModal">Login or Join</a></li>
        </ul>
      </div>
    </div>
    <modal :user="user"></modal>
  </nav>
</template>

<script>
import Modal from '@/components/Modal'
import { mapActions } from 'vuex'
export default{
  name: 'headers',
  components: {
    Modal
  },
  computed: {
    user () {
      return this.$store.state.username
    }
  },
  methods: {
    ...mapActions([
      'logoutFrom'
    ]),
    logout: function () {
      this.logoutFrom()
      console.log('anda logout')
    }
  }
}

</script>
