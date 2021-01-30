<template>
  <div>

    <label>
      <input v-model="search" type="text" class="input" />
      {{ listed.length }}
    </label>

    <div v-for="item in listed">

      <div v-if="slug">
        <NuxtLink :to="{ name: slug, params: { slug: item.slug } }">
          {{ item.title }}
        </NuxtLink>
      </div>

      <div v-else>
        {{ item.title }}
      </div>

    </div>

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
      search: '',
      slug: ''
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
