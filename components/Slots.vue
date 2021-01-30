<template>
  <div>
    <h3>
      <slot>Slot</slot>
    </h3>
    <slot name="slotA">Slot A</slot>
    <slot name="slotB">Slot B</slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Slot'
}
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  vertical-align: top;
  margin: 0 2rem 2rem 0;
}
</style>
