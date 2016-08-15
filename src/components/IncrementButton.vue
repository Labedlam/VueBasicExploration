<template>
    <button @click.prevent="activate">+1</button>
</template>

<script>
    import store from '../store'
    export default {
      methods: {
        activate () {
          console.log('+1 Pressed')
          store.dispatch('INCREMENT')
        }
      }
    }
</script>

<style>
</style>