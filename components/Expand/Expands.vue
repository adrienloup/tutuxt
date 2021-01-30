<template>
  <div class="expands">

    <div v-for="item in items" :key="item.title">
      <Expand
        :title="item.title"
        :value.sync="item.expand"
      >
        {{ item.content }}
      </Expand>
    </div>

  </div>
</template>

<script>
import Expand from '@/components/Expand/Expand';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Expands',
  components: { ButtonPrimary, Expand },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
