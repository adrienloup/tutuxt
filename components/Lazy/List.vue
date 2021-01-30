<template>
  <div>
    <div v-if="$fetchState.pending">
      <Loader />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching
    </div>

    <div v-else>

      <ButtonPrimary @click="$fetch">Refresh</ButtonPrimary>
      <ButtonPrimary @click="clear()">Clear</ButtonPrimary>

      <ul>
        <li v-for="(user, index) in users" :key="index.id">
          {{ user.name }}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary'
import Loader from '@/components/Loader/Loader';

export default {
  name: 'List',
  components: {Loader, ButtonPrimary },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    clear() {
      this.users = [];
      this.$emit('clear');
    }
  },
  async fetch() {
    this.users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    ;
  }
}
</script>

