<template>
  <div class="poccariswetLogo">
    <img class="image-icon" src="~/assets/997537.jpg">
  </div>
</template>

<style>
.image-icon {
  height: 160px;
  width: 160px;
  border: solid 5px #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px 1px #242424;
  animation: turn 2.5s ease-in;
}

@keyframes turn {
  0% {
    transform: rotate(-360deg);
  }
  50% {
    width: 300px;
    height: 300px;
  }
  80% {
    transform: rotate(50deg)
  }
  100% {
    transform: rotate(0);
  }
}
</style>

