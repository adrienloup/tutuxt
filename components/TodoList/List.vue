<template>

  <div v-if="lists">

    <form @submit.prevent="addTask">

      <label>
        <input
          v-model="search"
          type="text"
        />
      </label>

      <ButtonPrimary type="submit">
        Add
      </ButtonPrimary>

      <ButtonPrimary
        v-if="lists.length"
        type="button"
        @click="removeTodos"
      >
        Remove
      </ButtonPrimary>

    </form>

    <template v-if="lists.length">
      <Todo
        v-for="(todo, index) in lists"
        :key="index"
        :todo="todo"
        @remove-todo="removeTodo(todo)"
      />
    </template>

  </div>

  <div v-else>
    <Loader />
  </div>

</template>

<script>
import Todo from '@/components/TodoList/Todo';
import Loader from '@/components/Loader/Loader';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'TodoList',
  components: {
    Todo,
    Loader,
    ButtonPrimary
  },
  data() {
    return {
      search: '',
      lists: []
    };
  },
  methods: {
    addTask() {
      if (!this.search) {
        return;
      }
      this.lists.push({
        id: this.lists.length + 1,
        title: this.search,
        done: false
      })
      this.search = '';
    },
    removeTodo(e) {
      return this.lists.splice(this.lists.findIndex(todo => todo.id === e.id), 1);
    },
    removeTodos() {
      this.lists = [];
      this.search = '';
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  vertical-align: middle;
  display: inline-block;
}
</style>
