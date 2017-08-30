<template>
  <footer>
    <h6> {{copyright}}</h6>
    <ul>
      <li v-for="ninja in namaNinja">
        <h2> {{ninja.name}} </h2>
        <h2> {{ninja.gender}} </h2>
      </li>
    </ul>
  </footer>
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
  background: #ADD8E6;
  border: solid 2px black
}

</style>
