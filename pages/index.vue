<template>
  <section class="container">
    <div>
      <app-logo class="my-logo"/>
      <h1 class="title">
        poccariswet
      </h1>
      <h2 class="subtitle">
      </h2>
      <LinkButtons/>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LinkButtons from '~/components/LinkButtons.vue'

export default {
  components: {
    AppLogo,
    LinkButtons
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
