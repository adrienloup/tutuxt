<template>
  <div class="field">

    <div v-if="legend">
      <slot name="legend">{{ legend }}</slot>
    </div>

    <div v-if="label">
      <slot name="label">{{ label }}</slot>
    </div>

    <slot name="default"></slot>

    <div v-if="description">
      <slot name="description">{{ description }}</slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    legend: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
};
</script>

