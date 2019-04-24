<template>
  <div class="app">
    <section class="container">
      <div class="parts">
        <app-logo/>
        <overview style="margin-top:2em;" />
        <link-buttons/>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LinkButtons from '~/components/LinkButtons.vue'
import Overview from '~/components/Overview.vue'

export default {
  components: {
    AppLogo,
    LinkButtons,
    Overview
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
	align-items: center;
}
</style>
