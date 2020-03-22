<template>
  <div id="app">
    <h2>Vue example</h2>
    <input v-model="value" />
    <br />
    <input v-model="value" />
    <br />
    <code>
    <pre>

&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;h1&gt;Vue example&lt;/h1&gt;
    &lt;input v-model="value" /&gt;
    &lt;br /&gt;
    &lt;input v-model="value" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'app',
  data() {
    return {
        value: ''
    }
  },
  components: {}
}
&lt;/script&gt;

</pre>
    </code>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
        value: ''
    }
  },
  components: {}
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
