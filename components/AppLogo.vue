<template>
  <div class="app-logo">
    <div class="click-me">
      <img src="../assets/clickme2.png"/>
    </div>
    <div class="glitch-image" @click="open">
      <div class="glitch">
        <div class="glitch-inner">
          <div class="glitch-inner-2">
          </div>
        </div>
      </div>
    </div>
    <modal @close="close" v-if="modal">
      <iframe width="640" height="360" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </modal>
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
import firebase from '~/plugins/firebase'

export default {
  name: 'app-logo',
  components: {
    Modal
  },
  data () {
    return {
      modal: false,
      url: ''
    }
  },
  mounted() {
    this.fetchURL()
  },
  methods: {
    open() {
      this.modal = true
    },
    close() {
      this.modal = false
    },
    fetchURL() {
      firebase.firestore().collection('stream').get().then( data => {
        data.forEach(doc => {
          this.url = doc.data().url
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  width: 100%;
}

.click-me {
  position: absolute;
  z-index: 2;
}

.click-me img {
  width: 190px;
  height: 190px;
}

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
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: url("../assets/corgi.png");
  background-size: cover;
  z-index: 1;
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
