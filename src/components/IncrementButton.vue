<template>
    <button @click.prevent="activate">+1</button>
</template>

<script>
    export default {
      methods: {
        activate () {
          console.log('+1 Pressed')
        }
      }
    }
</script>

<style>
</style>