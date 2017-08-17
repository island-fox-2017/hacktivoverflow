<template>
  <b-navbar toggleable type="light" class="batas-bawah">
    <div class="container">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand to="./">
        <img src="../assets/hacktivoverflow.png" alt="BV">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item v-if="loggedin">Welcome, {{ user.name }}</b-nav-item>
          <b-nav-item v-if="loggedin" v-on:click="signOut" to="./">Logout</b-nav-item>

          <!-- <b-nav-item-dropdown right v-if="loggedin">
            <template slot="text">
              <span style="font-weight: bold;">User Menu</span>
            </template>

            <b-dropdown-item to="./sayhi">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="signOut" to="./">Signout</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item to="./registration" v-else>Login/Register</b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  props: ['user'],
  data () {
    return {
      loggedin: localStorage.getItem('token')
    }
  },
  methods: {
    signOut () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.batas-bawah {
  background-color: #FF9900;
  margin-bottom: 50px;
}
</style>
