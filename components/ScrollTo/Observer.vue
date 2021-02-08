<template>
  <div
    :class="{ active: active }"
  >
    ScrollTo
  </div>
</template>

<script>
export default {
  name: 'ScrollTo',
  data() {
    return {
      active: false
    };
  }
};
</script>
