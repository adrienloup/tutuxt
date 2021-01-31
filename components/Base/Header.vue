<template>
  <header class="tutuxt-header">
<!--    <ButtonPrimary :to="'/'">TuTuxt</ButtonPrimary>-->
<!--    <ButtonPrimary :to="'/page'">Page</ButtonPrimary>-->
<!--    <ButtonPrimary :to="'/component'">Component</ButtonPrimary>-->
<!--    <ButtonPrimary :to="'/blog'">Blog</ButtonPrimary>-->
<!--    <ButtonPrimary :to="'/shop'">Shop</ButtonPrimary>-->
    <ButtonPrimary :to="{ name: 'index' }">TuTuxt</ButtonPrimary>
    <ButtonPrimary :to="{ name: 'page' }">Page</ButtonPrimary>
    <ButtonPrimary :to="{ name: 'component' }">Component</ButtonPrimary>
    <ButtonPrimary :to="{ name: 'blog' }">Blog</ButtonPrimary>
    <ButtonPrimary :to="{ name: 'shop' }">Shop</ButtonPrimary>
  </header>
</template>

<script lang="ts">
import ButtonPrimary from '@/components/Button/Primary.vue';

export default {
  components: { ButtonPrimary }
}
</script>
