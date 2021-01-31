<template>

  <div v-if="todo">

    <h3
      contenteditable="true"
      :class="{ done: todo.done }"
      @keydown.enter="updateTodo($event, todo)"
      @blur="updateTodo($event, todo)"
    >
      {{ todo.title }}
    </h3>

    <label>
      <input
        type="checkbox"
        @change="completeTodo(todo)"
        @checked="todo.done"
      />
    </label>

    <ButtonPrimary
      @click.prevent="removeTodo(todo)"
      :disabled="!todo.done"
    >
      Remove
    </ButtonPrimary>

  </div>

</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Todo',
  components: { ButtonPrimary },
  props: {
    todo: {
      type: Object,
      default: null
    }
  },
  methods: {
    updateTodo(e, todo) {
      e.preventDefault();
      todo.title = e.target.innerText;
      e.target.blur();
    },
    completeTodo(todo) {
      todo.done = !todo.done;
    },
    removeTodo(todo) {
      this.$emit('remove-todo', todo);
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
  position: absolute;
  top: -100%;
}
label {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: .3rem;
  border: 3px solid rgba(0, 0, 0, .2);
  &::before {
    display: none;
    content: "";
    width: .9rem;
    height: .9rem;
    margin: auto;
    background: rgba(0, 0, 0, .2);
    border-radius: .1rem;
  }
}
.done {
  text-decoration:line-through;
  & + label::before {
    display: block;
  }
}
</style>
