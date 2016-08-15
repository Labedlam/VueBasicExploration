<template>
    <button @click.prevent="activate">+1</button>
</template>

<script>
    import store from '../store'
    export default {
      data () {
        return {
          sharedState: store
        }
      },
      methods: {
        activate () {
          this.sharedState.increment(this.sharedState.state.counter)
        }
      }
    }
</script>

<style>
</style>