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
    <modal :user="user" @gantiLagi="gantiUser"></modal>
  </nav>
</template>

<script>
import Modal from '@/components/Modal'
export default{
  props: ['user'],
  name: 'headers',
  components: {
    Modal
  },
  methods: {
    logout: function () {
      localStorage.clear()
      this.$emit('hapusNama')
      console.log('anda logout')
    },
    gantiUser: function (name) {
      this.$emit('gantiNama', name)
    }
  }
}

</script>
