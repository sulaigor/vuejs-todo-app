<template>
  <section class="home">
    <BaseHeadline text="Todos list here" />
    <TodoList :todos="todos">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"
                @todoDone="doneTodo"
                @deleteTodo="deleteTodo"
      />
    </TodoList>
    <CreateTodoItemForm @createItem="createItem" />
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
        todos: this.loadTodos(),
      }
    },
    methods: {
      doneTodo(todoId) {
        let index = this.todos.findIndex(todo => todo.id === todoId);
        this.todos[index].done = this.todos[index].done ? false : true;
      },

      deleteTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        this.saveTodos();
      },

      createItem(todoText) {
        let item = {
          id: this.todos.length + 1,
          text: todoText,
          done: false,
        };
        this.todos.push(item);
        this.saveTodos();
      },

      saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },

      loadTodos() {
        let todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
      }
    },
  }
</script>
