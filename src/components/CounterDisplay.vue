<template>
    Count is {{ counter }}
</template>

<script>
    import store from '../store'

    export default {
      computed: {
        counter () {
          return store.state.counter
        }
      }
    }
</script>
<style>
</style>