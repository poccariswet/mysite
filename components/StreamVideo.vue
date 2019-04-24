<template>
  <div class="stream-parts">
    <iframe width="863" height="494" :src="streamURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'stream-video',
  data () {
    return {
      streamURL: 'https://www.youtube.com/embed/YxwdFjIptQc'
    }
  }
}
</script>

<style scoped>
</style>

