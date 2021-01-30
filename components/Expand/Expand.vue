<template>
  <div>
    <div style="padding: .5rem; background: #d6d7d7;" @click="value_sync = !value_sync">
      {{ title }} {{ value_sync }}
    </div>
    <div v-if="value_sync" style="padding: .5rem; background: #aaa;">
      <slot />
    </div>
  </div>
</template>

<script>
  import propSync from '../../../styleguide/src/mixins/prop-sync.js';

  export default {
    name: 'TestExpand',
    mixins: [
      propSync('value', false, Boolean, false)
    ],
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>
