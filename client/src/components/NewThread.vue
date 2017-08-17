<template lang="html">
  <div>
    <b-btn class="btn-block btn-info" to="./">Home</b-btn>
    <b-btn class="btn-block btn-info" @click="$root.$emit('show::modal','modal1')">Post a thread</b-btn>
    <b-modal id="modal1" title="Create your thread">
      <form>
        <p>Title:</p>
        <b-form-input type="text" placeholder="Enter your thread title" v-model="title"></b-form-input>
        <br>
        <p>Content:</p>
        <!-- <textarea class="form-control" rows="5" id="content" v-model="content" placeholder="Enter your thread content"></textarea> -->
        <vue-editor v-model="content"></vue-editor>
        <br>
        <b-button variant="primary" @click="handler">Post</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: ['creator'],
  components: {
    VueEditor
  },
  data () {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    doPost () {
      var self = this
      this.axios.post('http://localhost:3000/api/threads', {
        token: self.creator,
        title: self.title,
        threadContent: self.content
      })
      .then(response => {
        self.$router.push(`/`)
      })
    },
    handler () {
      this.doPost()
      this.$root.$emit('hide::modal', 'modal1')
    }
  }
}
</script>

<style lang="css">
</style>
