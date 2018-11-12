<template>
  <div class=links>
    <a
      href="https://github.com/poccariswet"
      target="_blank"
      class="button--github">GitHub</a>
    <a
      href="https://speakerdeck.com/soeyu"
      target="_blank"
      class="button--speakerdeck">Speaker Deck</a>
    <a
      href="https://twitter.com/poccariswet"
      target="_blank"
      class="button--twitter">twitter</a>
  </div>
</template>

<style lang="scss" scoped>
.links {
  padding-top: 15px;
  .button--speakerdeck {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      background-color: #3b8070;
      animation: shake 1.9s infinite;
    }
  }
  .button--github {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      background-color: #35495e;
      animation: shake 1.9s infinite;
    }
  }
  .button--twitter {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #62b2ee;
    color: #62b2ee;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      background-color: #62b2ee;
      animation: shake 1.9s infinite;
    }
  }
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
