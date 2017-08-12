<template>
  <div class="col-md-4">
    <div class="container-fluid">
      <hr>
      <h5>Statistic</h5>
      <hr>
      <ul class="list-group">
        <li class="list-group-item active">
          <span class="badge">{{members}}</span>
          MEMBERS
        </li>
        <li class="list-group-item active">
          <span class="badge">{{count}}</span>
          THREADS
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    props: ['count'],
    name: 'sidebar',
    data: function () {
      return {
        members: 0
      }
    },
    mounted: function () {
      const self = this
      axios.get('http://localhost:3000/user/member')
      .then(response => {
        self.members = response.data.count
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>
