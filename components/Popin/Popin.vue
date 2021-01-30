<template>
  <div class="popins">
    tutu

  </div>
</template>

<script>
import Expand from '@/components/Expand/Expand';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Popins',
  components: { ButtonPrimary, Expand },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
