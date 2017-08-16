<template>
  <div class="col-md-4">
    <!-- <h1>{{title}}</h1> -->

    <!-- <navi></navi> udah ok kt hilangin dl-->
    <router-view></router-view>
  </div>
</template>

<script>
import navi from '@/components/navi'
  // di taruh disini klo ga termasuk dlm router view
export default {
  components: {
    navi
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
