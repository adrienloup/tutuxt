<template>
  <div>

    <label>
      <input
        v-model="search"
        type="text"
      />
      {{ listed.length }}
    </label>

    <ButtonPrimary @click="refresh()">
      Refresh
    </ButtonPrimary>

    <ButtonPrimary
      v-if="search"
      @click="clear()"
    >
      Clear
    </ButtonPrimary>

    <div
      class="post"
      v-for="item in listed"
    >
      <h3 v-if="slugPart">
        <NuxtLink :to="{ name: slugPart, params: { slug: item.id } }">
          {{ item.title }}
        </NuxtLink>
      </h3>
      <h3 v-else>
        {{ item.title }}
      </h3>
    </div>

    <div v-if="listed.length === 0">
      Not found
    </div>

  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'BlogSearch',
  components: { ButtonPrimary },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    slugPart: {
      type: String,
      default: ''
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
  },
  methods: {
    refresh() {
      this.$emit('refresh');
    },
    clear() {
      this.search = '';
    }
  }
}
</script>
