<template>
  <div class="container col-md-12">
    <footer>
      <h6> {{copyright}}</h6>
      <ul>
        <li v-for="ninja in namaNinja">
          <h2> {{ninja.name}} </h2>
          <h2> {{ninja.gender}} </h2>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['namaNinja'],
  data () {
    return {
      copyright: ' Copyright K 2017'
    }
  }
}
</script>

<style scoped>
footer {
  background: #fff;
  border: solid 2px black
}

</style>
