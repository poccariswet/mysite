<template>
  <div class="overview">
    <div class="username" data-text="poccariswet">
      poccariswet
    </div>
    <h2 class="subtitle">
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.username{
  color:#fff;
  font-size:3em;
  position:relative;
  margin:auto;
  font-family: "montserrat",sans-serif;
  text-transform: uppercase;
}

.username::before,.username::after{
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.username::before {
  color: #ff00c1;
  animation: glitch-effect 3s infinite;
}

.username::before {
  color: #3498db;
  animation: glitch-effect 3s infinite;
}

@keyframes glitch-effect {
  0% {
    left: -3px;
    top: -3px;
  }
  25% {
    left: 3px;
    top: 0px;
  }
  50% {
    left: -2px;
    top: 3px;
  }
  75% {
    left: 2px;
    top: -2px;
  }
  100% {
    left: 0px;
    top: -3px;
  }
}
</style>
