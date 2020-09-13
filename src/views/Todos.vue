<template>
  <section class="home">
    <BaseHeadline text="Todos list here" />
    <TodoList>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"
                @markDone="doneTodo"
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
        doneTodos: this.loadTodos('doneTodos'),
      }
    },
    methods: {
      doneTodo(todoId) {
        let currentTodo = this.todos.filter(todo => todo.id === todoId)[0];
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        currentTodo.done = true;
        currentTodo.id = this.doneTodos.length + 1;
        currentTodo.doneAt = new Date().toLocaleDateString();
        this.doneTodos.push(currentTodo);
        this.saveTodos();
        this.saveDoneTodos();
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

      saveDoneTodos() {
        localStorage.setItem('doneTodos', JSON.stringify(this.doneTodos));
      },

      loadTodos(todosName = 'todos') {
        let todos = localStorage.getItem(todosName);
        return todos ? JSON.parse(todos) : [];
      }
    },
  }
</script>
