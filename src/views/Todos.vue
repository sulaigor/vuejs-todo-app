<template>
  <section class="home">
    <BaseHeadline text="Todos list here" />
    <TodoList :todos="todos">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @todoDone="doneTodo" />
    </TodoList>
    <CreateTodoItemForm />
  </section>
</template>

<script>
  import BaseHeadline from "../components/BaseHeadline";
  import CreateTodoItemForm from "../components/CreateTodoItemForm";
  import TodoList from "../components/TodoList";
  import TodoItem from "../components/TodoItem";

  export default {
    name: 'todos',
    components: {
      BaseHeadline,
      CreateTodoItemForm,
      TodoList,
      TodoItem
    },
    data: function () {
      return {
        todos: [
          {
            id: 1,
            text: 'Some todo 1',
            done: false,
          },
          {
            id: 2,
            text: 'Some todo 2',
            done: false,
          },
          {
            id: 3,
            text: 'Some todo 3',
            done: false,
          },
        ]
      }
    },
    methods: {
      doneTodo(todoId) {
        let index = this.todos.findIndex(todo => todo.id === todoId)
        this.todos[index].done = this.todos[index].done ? false : true;

        console.log(JSON.stringify(this.todos));
      }
    },
  }
</script>
