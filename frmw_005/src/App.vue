<template>
  <div id="app">
    <h2>FRMW_005</h2>
    <div>
      <i>R:</i>
      <input v-model="r" type="number" min="0" max="255" @change="setBg" />
      <input v-model="r" type="range" min="0" max="255" @input="setBg" />
    </div>
    <div>
      <i>G:</i>
      <input v-model="g" type="number" min="0" max="255" @change="setBg" />
      <input v-model="g" type="range" min="0" max="255" @input="setBg" />
    </div>
    <div>
      <i>B:</i>
      <input v-model="b" type="number" min="0" max="255" @change="setBg" />
      <input v-model="b" type="range" min="0" max="255" @input="setBg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      r: 255,
      g: 255,
      b: 255
    }
  },
  components: {},
  methods: {
    setBg() {
      document.body.style.backgroundColor = `rgb(${this.r},${this.g},${this.b})`;
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
.crossed {
  text-decoration: line-through;
}
</style>
