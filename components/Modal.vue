<template>
  <div>
    <transition name="Modal">
      <div 
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button class="modal-default-button p-4" @click="$emit('close')">
              <img src="@/assets/icon-close.png">
            </button>
            <img :src="require('../assets/'+activeGif.id+activeGif.frame+'.png')">
            <div class="controls p-4">
              <button @click="$emit('close')">
                <img src="@/assets/icon-left.png">
              </button>
              <button @click="$emit('close')">
                <img src="@/assets/icon-right.png">
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Modal",
  computed: {
    ...mapState(["activeGif"]),
  },
  methods: {
    ...mapMutations([
      "incrementFrame", //also supports payload `this.nameOfMutation(amount)` 
    ]),
  },
  mounted () {
    window.addEventListener('keydown', this.incrementFrame)
  }
};
</script>

<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  align-items: center;
  height: 100vh;
}

.modal-container {
  display: flex;
  flex-direction: column;
  flex-basis: 1 1 1;
  max-width: 80%;
  margin: 0px auto;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.controls {
  display: flex;
  justify-content: space-between;
  background: transparent;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
