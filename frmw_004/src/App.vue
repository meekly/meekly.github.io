<template>
  <div id="app">
    <h4 id="author" title="GossJS" hidden>Valentin Kiselev</h4>
    <h2>FRMW_004</h2>
    <button @click="value++" >⬆</button>
    <input v-model="value" />
    <Degs :degs="degs()" />
  </div>
</template>

<script>
import Degs from './components/Degs.vue';

export default {
  name: 'app',
  data() {
    return {
        value: 1
    }
  },
  components: {
    Degs
  },
  methods: {
    increaseValue() {
      this.value += 1;
    },
    degs() {
      return Array.from({ length: this.value }, (v, i) => 10 + i);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
