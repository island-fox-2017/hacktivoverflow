<template>
  <div class="col-md-4">
    <!-- <h1>{{title}}</h1> -->
    <Header></Header>
    <!-- <navi></navi> udah ok kt hilangin dl-->
    <router-view></router-view>
  </div>
</template>

<script>
import navi from '@/components/navi'
import Header from '@/components/Header'
  // di taruh disini klo ga termasuk dlm router view
  // misal utk yg statis gitu terus.. ( ky sidebar, header, dll )
export default {
  components: {
    navi,
    Header
  },
  data () {
    return {
      title: 'List Questions'
    }
  }
}
</script>

<style>

</style>
