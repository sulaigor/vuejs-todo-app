<template>
  <form class="create-todo-item" @submit.prevent="createItem">
    <label class="form-label">
      Create new todo:
      <input class="form-input" type="text" v-model="inputText" autofocus>
    </label>
  </form>
</template>

<script>
  export default {
    data: function() {
      return {
        inputText: '',
      }
    },
    methods: {
      createItem() {
        if(this.inputText.length > 0)
        {
          this.$emit('createItem', this.inputText);
          this.clearInputText();
        }
      },
      clearInputText() {
        this.inputText = '';
      }
    }
  }
</script>

<style scoped lang="scss">
  .create-todo-item {
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2em 0;

    .form-label {
      color: #805DEE;
    }

    .form-input {
      font-size: 1em;
      margin-left: .5em;
      padding: .2em .5em;
      border: none;
      border-bottom: 1px solid #000;

      &:focus {
        outline: none;
      }
    }
  }
</style>