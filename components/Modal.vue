<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class=modal-window>
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style scoped>

.modal.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5)
}
.modal-window {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

/* overlay trainsiton */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transition: translateY(-20px);
}

</style>
