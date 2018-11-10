<template>
  <section class="container">
    <div>
      <app-logo class="my-logo"/>
      <h1 class="title">
        poccariswet
      </h1>
      <h2 class="subtitle">
      </h2>
      <div class="links">
        <a
          href="https://www.facebook.com/yusuke.soeta.92"
          target="_blank"
          class="button--facebook">Facebook</a>
        <a
          href="https://github.com/poccariswet"
          target="_blank"
          class="button--github">GitHub</a>
        <a
          href="https://speakerdeck.com/soeyusuke"
          target="_blank"
          class="button--speakerdeck">Speaker Deck</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
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

.links {
  padding-top: 15px;
}

.button--facebook {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #333EA2;
  color: #333EA2;
  text-decoration: none;
  padding: 10px 30px;
}

.button--facebook:hover {
  color: #fff;
  background-color: #333EA2;
}

.button--speakerdeck {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--speakerdeck:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--github {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
}

.button--github:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
