<template>
  <div class="container">
    <div class="row">
      <div class="page-header">
        <h1> hacktiv over flow</h1>

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
      </div>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
import Login from '@/components/Login'
export default {
  components: {
    Register,
    Login
  }
}
</script>

<style>

</style>
