<template>
  <div class="container">
    <div class="row">
      <div class="page-header">
        <h3> sek sek </h3>

        <button type="button" style="display:inline;" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Login | Register</button>
          <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h5>input your credential here</h5>
                    <register></register>
                    <login></login>
                </div>
              </div>
          </div>
        </div>

         <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading" v-if="haveLogin">Welcome, {{decoded.fullname}}</div>
            <div class="panel-heading" v-if="!haveLogin"> you need to login</div>
            <!-- <div class="panel-body" v-if="haveLogin" v-on:click="logout">Logout</div> -->
            <button type="button" v-if="haveLogin" v-on:click="logout">Logout</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
// import axios from 'axios'
import Register from '@/components/Register'
import Login from '@/components/Login'
export default {
  data () {
    return {
      decoded: '',
      token: ''
    }
  },
  components: {
    Register,
    Login
  },
  methods: {
    decoding () {
      console.log('decoding jalan')
      this.token = localStorage.getItem('token')
      this.decoded = jwtDecode(this.token)
          // ini carane kita assign.. klo awal e cuma
          // var decoded => ini cuma kt mau nampung dlm variable.. blm di assign ke state/vue !!!
          // kudu pake this
    },
    logout () {
      localStorage.removeItem('token')
      this.haveLogin = null
      this.decoded = ''
      this.token = ''
    }
  },
  created () {
    this.decoding()
  },
  computed: {
    haveLogin () {
      return localStorage.getItem('token')
    }
  }
}
</script>

<style>

</style>
