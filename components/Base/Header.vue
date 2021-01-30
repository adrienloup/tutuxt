<template>
  <header class="tutuxt-header">
    <ButtonPrimary :to="'/'">TuTuxt</ButtonPrimary>
    <ButtonPrimary :to="'/component'">Components</ButtonPrimary>
    <ButtonPrimary :to="'/blog'">Blog</ButtonPrimary>
  </header>
</template>

<script lang="ts">
import ButtonPrimary from '@/components/Button/Primary.vue';

export default {
  components: { ButtonPrimary }
}
</script>
