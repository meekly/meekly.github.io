<template>
  <ul>
    <li v-for="deg in degs">
      <h1><span>{{base}}</span><sup>{{deg}}</sup> = {{Math.pow(base, deg)}}</h1>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      base: 2
    }
  },
  props: {
    degs: Array
  }
}
</script>
