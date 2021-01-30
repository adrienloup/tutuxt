<template>
  <div class="expand">

    <div
      class="expand-header"
      @click="value_sync = !value_sync"
    >
      {{ value_sync }}
    </div>

    <div
      class="expand-content"
      v-if="value_sync"
    >
      <slot />
    </div>

  </div>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';

export default {
  name: 'Expand',
  mixins: [
    propSync(
      'value',
      false,
      Boolean,
      false
    )
  ],
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/var.scss';

.expand {
  font-size: 1rem;

  &-header {
    padding: 1rem;
    background-color: $color-primary;
    color: $color-default;
    cursor: pointer;
  }

  &-content {
    padding: 1rem;
  }
}
</style>
