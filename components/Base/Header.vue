<template>
  <header class="tutuxt-header">
    <ButtonPrimary :to="'/'">Home</ButtonPrimary>
    <ButtonPrimary :to="'/component'">Component</ButtonPrimary>
  </header>
</template>

<script lang="ts">
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: { ButtonPrimary }
}
</script>
