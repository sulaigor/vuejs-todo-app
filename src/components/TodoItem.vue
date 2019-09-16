<template>
  <li class="todo-item">
    <input class="todo-checkbox" type="checkbox" @input="markDone">
    {{ todo.text }}
    <button class="delete-btn" @click="deleteTodo">Delete</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
    },
    methods: {
      markDone() {
        this.$emit('todoDone', this.todo.id);
      },
      deleteTodo() {
        this.$emit('deleteTodo', this.todo.id);
      }
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

    .todo-checkbox {
      font-size: 1.5em;
      position: absolute;
      left: 5px;
    }

    .delete-btn {
      font-size: .8em;
      position: absolute;
      right: 5px;
      border: 1px solid #222;
      border-radius: .4em;
    }
  }

</style>