<template>
  <ul class="todo-list">
    <slot />
  </ul>
</template>

<script>

  export default {
    components: {

    },
    props: {
      todos: Array,
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .todo-list {
    padding: 0;
  }
</style>