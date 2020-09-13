<template>
  <ul class="todo-list">
    <slot />
  </ul>
</template>

<script>

  export default {
    components: {

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .todo-list {
    padding: 0;
    margin: 2em 5em 0;
  }
</style>