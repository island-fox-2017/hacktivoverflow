<template>
  <div class="container">
    <div class="col-md-8">
      <div class="container-fluid">
        <hr>
        <!-- INPUT TITLE -->
        <AddQuestion :user="user" :questions="questions"></AddQuestion>
        <!-- END INPUT TITLE -->
        <!-- LIST QUESTIOn -->
        <router-view :questions="questions"></router-view>
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
  import AddQuestion from '@/components/AddQuestion'
  export default{
    props: ['questions', 'count', 'user'],
    name: 'maincontent',
    components: {
      Sidebar,
      AddQuestion
    }
  }

</script>
