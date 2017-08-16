<template>
  <div class="container">
    <div class="col-md-8">
      <div class="container-fluid">
        <hr>
        <!-- INPUT TITLE -->

        <!-- END INPUT TITLE -->
        <!-- LIST QUESTIOn -->
        <router-view></router-view>
        <!-- END QUESTIOn -->
      </div>
    </div>

    <!-- SIDE BAR -->
    <sidebar :count="count"></sidebar>
    <!-- END SIDE BAR -->
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import { mapActions } from 'vuex'
  export default{
    props: ['questions', 'count', 'user'],
    name: 'maincontent',
    components: {
      Sidebar
    },
    methods: {
      ...mapActions([
        'getAllQuestions'
      ])
    },
    created () {
      this.getAllQuestions()
    }
  }

</script>
