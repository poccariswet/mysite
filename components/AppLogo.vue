<template>
  <div class="app-logo">
    <div class="glitch-image" @click="open = true">
      <div class="glitch">
        <div class="glitch-inner">
          <div class="glitch-inner-2">
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-bind:class="{ 'is-active': open }">
      <div class="modal-background" v-on:click="open = false"></div>
      <div class="modal-content">
      </div>
    </div>
  </div>
</template>

<script>
import StreamVideo from '~/components/StreamVideo.vue'
export default {
  name: 'app-logo',
  components: {
    StreamVideo
  },
  data() {
    return { open: false }
  }
}
</script>

<style lang="scss" scoped>
@keyframes noise-anim{
  $steps: 20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
     $r: random(500);
     clip:rect( $r +px,9999px, $r + random(100)+px, 0);
     left: random(10) - 5%;
     filter: saturate(random(100)/5);
     transform: scale(1 + random(3)/10);
    }
  }
}

@keyframes noise-anim-2{
  $steps: 20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
     $k: random(500);
     clip:rect( $k +px,9999px, $k + random(50)+px, 0);
     left: random(10) - 5%;
     transform: scale(1 + random(3)/10);
     filter: saturate(random(100)/5);
    }
  }
}

.glitch-image {
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.glitch, .glitch-inner, .glitch-inner-2 {
 width: 300px;
 height: 300px;
 background-image: url(https://avatars1.githubusercontent.com/u/24663217?s=400&u=106ed535246c47bf666ed9e59ec15f6b7399e3c7&v=4);
 background-size: cover;
}

.glitch {
 position: relative;
 overflow: hidden;
}
.glitch-inner {
 position: absolute;
 top: 0;
 left: 0;
 opacity: .5;
 clip: rect(60px, 9999px, 60px, 0);
 animation: noise-anim 3s infinite step-end;
}

.glitch-inner-2 {
 position: absolute;
 top: 0;
 left: 0;
 opacity: .5;
 clip: rect(60px, 9999px, 60px, 0);
 animation: noise-anim-2 3s infinite step-end;
}
</style>
