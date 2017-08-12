<template>
  <div class="container">
    <div class="col-md-8">
      <div class="container-fluid">
        <hr>
        <!-- INPUT TITLE -->
        <AddQuestion :user="user" :questions="questions"></AddQuestion>
        <!-- END INPUT TITLE -->
        <!-- LIST QUESTIOn -->
        <question :questions="questions"></question>
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
  import Question from '@/components/Question'
  import AddQuestion from '@/components/AddQuestion'
  export default{
    props: ['questions', 'count', 'user'],
    name: 'maincontent',
    components: {
      Sidebar,
      Question,
      AddQuestion
    }
  }

</script>
