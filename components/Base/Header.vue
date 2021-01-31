<template>
  <header class="tutuxt-header">
    <ButtonPrimary :to="'/'">TuTuxt</ButtonPrimary>
    <ButtonPrimary :to="'/page'">Page</ButtonPrimary>
    <ButtonPrimary :to="'/component'">Component</ButtonPrimary>
    <ButtonPrimary :to="'/blog'">Blog</ButtonPrimary>
    <ButtonPrimary :to="'/Shop'">Shop</ButtonPrimary>
  </header>
</template>

<script lang="ts">
import ButtonPrimary from '@/components/Button/Primary.vue';

export default {
  components: { ButtonPrimary }
}
</script>
