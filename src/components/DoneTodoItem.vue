<template>
  <li class="todo-item">
    <span class="todo-date">Done at: {{ todo.doneAt }}</span>
    <span class="todo-text">{{ todo.text }}</span>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .todo-item {
    position: relative;
    background: #ddd;
    padding: .5em 1em;
    list-style: none;

    + .todo-item {
      margin-top: .5em;
    }

    .todo-date {
      position: absolute;
      left: .5em;
    }
  }
</style>