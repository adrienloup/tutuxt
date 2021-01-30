<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <test-expand
        :title="item.title"
        :value.sync="item.expand"
      >
        {{ item.content }}
      </test-expand>
    </li>
  </ul>
</template>

<script>
  import TestExpand from './TestExpand';

  export default {
    name: 'TestBlock',
    components: {
      TestExpand
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  };
</script>
