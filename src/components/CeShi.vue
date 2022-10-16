<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>好的 欢迎来到跳转</h2>
  </div>
</template>

<script>
export default {
  name: 'CeShi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
