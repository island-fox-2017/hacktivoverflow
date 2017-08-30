<template>
  <div class="col-md-12">
    <!-- <h1>{{title}}</h1> -->
    <app-header></app-header>
    <!-- <navi></navi> udah ok kt hilangin dl-->
    <router-view></router-view>
    <app-footer :namaNinja="ninjas"></app-footer>
  </div>
</template>

<script>
import navi from '@/components/navi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
  // di taruh disini klo ga termasuk dlm router view
  // misal utk yg statis gitu terus.. ( ky sidebar, header, dll )
export default {
  components: {
    navi,
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'List Questions',
      ninjas: [
        {name: 'ryu', gender: 'male'},
        {name: 'ryuca', gender: 'female'},
        {name: 'ryuken', gender: 'male'}
      ]
    }
  }
}
</script>

<style>

</style>
