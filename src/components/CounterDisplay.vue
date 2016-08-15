<template>
    Count is {{ sharedState.counter }}
</template>

<script>
    import store from '../store'
    export default {
      data () {
        return {
          sharedState: store.state
        }
      }
    }
</script>
<style>
</style>