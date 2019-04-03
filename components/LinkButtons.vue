<template>
  <div class=link>
    <div class=links>
      <a
        href="https://github.com/poccariswet"
        class="iconbtn fab fa-github"></a>
      <a
        href="https://speakerdeck.com/soeyu"
        class="iconbtn fab fa-speaker-deck"></a>
      <a
        href="https://twitter.com/poccariswet"
        class="iconbtn fab fa-twitter"></a>
      <a
        href="https://twitch.tv/poccariswet"
        class="iconbtn fab fa-twitch"> </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.iconbtn {
  width: 80px;
  height: 80px;
  text-decoration: none;
  margin: 20px;
  position: relative;
  font-size: 40px;
}

.iconbtn::before {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.iconbtn::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: 0;
}

.links .iconbtn {
  border: 3px #fff;
  color: #34495e;
}

.links .iconbtn::after {
  background: #fff;
  transition: 0.4s;
}
.links .iconbtn:hover::after{
  transform: scale(1.3);
  opacity: 0;
}
.links .iconbtn:hover {
  color: #fff;
  animation: shake 1.9s infinite;
}


@keyframes shake {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  2% { transform: translate(-0.5px, 0.5px) rotate(-0.5deg); }
  4% { transform: translate(-2.5px, -1.5px) rotate(0.5deg); }
  6% { transform: translate(1.5px, 1.5px) rotate(-1.5deg); }
  8% { transform: translate(-1.5px, -2.5px) rotate(0.5deg); }
  10% { transform: translate(1.5px, 1.5px) rotate(-0.5deg); }
  12% { transform: translate(-1.5px, 1.5px) rotate(-1.5deg); }
  14% { transform: translate(-1.5px, 0.5px) rotate(0.5deg); }
  16% { transform: translate(0.5px, 0.5px) rotate(-0.5deg); }
  18% { transform: translate(0.5px, -2.5px) rotate(-0.5deg); }
  20% { transform: translate(-2.5px, 0.5px) rotate(-1.5deg); }
  22% { transform: translate(1.5px, 0.5px) rotate(-0.5deg); }
  24% { transform: translate(-0.5px, -1.5px) rotate(-0.5deg); }
  26% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }
  28% { transform: translate(-1.5px, -0.5px) rotate(0.5deg); }
  30% { transform: translate(-2.5px, 0.5px) rotate(0.5deg); }
  32% { transform: translate(1.5px, -0.5px) rotate(-0.5deg); }
  34% { transform: translate(0.5px, -2.5px) rotate(-1.5deg); }
  36% { transform: translate(0.5px, -2.5px) rotate(-0.5deg); }
  38% { transform: translate(-2.5px, -0.5px) rotate(0.5deg); }
  40% { transform: translate(-0.5px, 1.5px) rotate(0.5deg); }
  42% { transform: translate(1.5px, 1.5px) rotate(-0.5deg); }
  44% { transform: translate(-2.5px, -2.5px) rotate(0.5deg); }
  46% { transform: translate(0.5px, -2.5px) rotate(0.5deg); }
  48% { transform: translate(-0.5px, -2.5px) rotate(-0.5deg); }
  50% { transform: translate(-0.5px, 0.5px) rotate(0.5deg); }
  52% { transform: translate(1.5px, 0.5px) rotate(0.5deg); }
  54% { transform: translate(-2.5px, 0.5px) rotate(-1.5deg); }
  56% { transform: translate(-2.5px, 1.5px) rotate(0.5deg); }
  58% { transform: translate(-2.5px, -2.5px) rotate(-0.5deg); }
  60% { transform: translate(-0.5px, -2.5px) rotate(-0.5deg); }
  62% { transform: translate(-1.5px, 0.5px) rotate(-0.5deg); }
  64% { transform: translate(-1.5px, -0.5px) rotate(0.5deg); }
  66% { transform: translate(-2.5px, 0.5px) rotate(-0.5deg); }
  68% { transform: translate(-1.5px, -0.5px) rotate(0.5deg); }
  70% { transform: translate(0.5px, 1.5px) rotate(0.5deg); }
  72% { transform: translate(-2.5px, 1.5px) rotate(0.5deg); }
  74% { transform: translate(1.5px, -0.5px) rotate(0.5deg); }
  76% { transform: translate(-0.5px, -1.5px) rotate(0.5deg); }
  78% { transform: translate(-0.5px, -2.5px) rotate(0.5deg); }
  80% { transform: translate(1.5px, -0.5px) rotate(0.5deg); }
  82% { transform: translate(-1.5px, 0.5px) rotate(-0.5deg); }
  84% { transform: translate(-1.5px, -1.5px) rotate(-0.5deg); }
  86% { transform: translate(0.5px, -0.5px) rotate(-1.5deg); }
  88% { transform: translate(-2.5px, -2.5px) rotate(-1.5deg); }
  90% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }
  92% { transform: translate(-1.5px, 0.5px) rotate(0.5deg); }
  94% { transform: translate(-1.5px, -0.5px) rotate(0.5deg); }
  96% { transform: translate(1.5px, 0.5px) rotate(-0.5deg); }
  98% { transform: translate(-0.5px, -1.5px) rotate(0.5deg); }
}
</style>
