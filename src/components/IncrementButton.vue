<template>
    <button @click.prevent="activate">+1</button>
</template>

<script>
    export default {
      methods: {
        activate () {
          console.log('+1 Pressed')
            // $dispatch an event that propagates upward along a parent chain
          this.$dispatch('button-pressed')
        }
      }
    }

    // Disadvantages According to this blog
    /* 1. For every action, the parent components need to wire and “dispatch” events to the right components.
       2.It’s hard to understand where events might come from for a larger application.
       3.There’s no clear place for the “business logic”. this.count++ is in CounterDisplay but the business logic can be anywhere, which can make it unmaintainable.
     */

</script>

<style>
</style>