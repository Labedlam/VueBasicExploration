<template>
  <div id="app">
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Counter:</h3>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/CounterDisplay.vue'
import Increment from './components/IncrementButton.vue'
export default {
  components: {
    Counter,
    Increment
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
