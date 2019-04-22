<template>
  <div class="app">
    <section class="container">
      <div class="parts">
        <app-logo/>
        <Overview style="margin-top:2em;" />
        <LinkButtons/>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/GegJz41l5Q8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
