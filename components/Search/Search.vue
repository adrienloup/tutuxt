<template>
  <div>

    <label>
      <input v-model="search" type="text" class="input" />
      {{ listed.length }}
    </label>

    <ul>
      <li v-for="item in listed">
        {{ item.title }}
      </li>
    </ul>

    <div v-if="listed.length === 0">Not found</div>

  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      search: ''
    };
  },
  computed: {
    listed() {
      return this.list.filter(item => {
        return item.title.toLowerCase().includes(this.search);
      });
    }
  }
}
</script>
