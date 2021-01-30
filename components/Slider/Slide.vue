<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Slide'
}
</script>

<style lang="scss" scoped>
div {
  display: none;

  &.active {
    display: block;
  }
}
</style>
