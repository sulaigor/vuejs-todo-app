<template>
  <section class="done-todos">
    <BaseHeadline text="Done todos" />
    <TodoList>
      <DoneTodoItem v-for="todo in doneTodos" :key="todo.id" :todo="todo" />
    </TodoList>
  </section>
</template>

<script>
  import BaseHeadline from "../components/BaseHeadline";
  import DoneTodoItem from "../components/DoneTodoItem";
  import TodoList from "../components/TodoList";

  export default {
    name: 'done-todos',
    components: {
      BaseHeadline,
      TodoList,
      DoneTodoItem
    },
    data: function () {
      return {
        doneTodos: this.loadTodos(),
      }
    },
    methods: {
      loadTodos(todosName = 'doneTodos') {
        let todos = localStorage.getItem(todosName);
        return todos ? JSON.parse(todos) : [];
      }
    }
  }
</script>
