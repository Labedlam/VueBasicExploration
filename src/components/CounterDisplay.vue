<template>
    Count is {{ count }}
</template>

<script>
    export default {
      data () {
        return {
          count: 0
        }
      },
      events: {
        increment () {
          this.count ++
        }
      }
    }
</script>
<style>
</style>