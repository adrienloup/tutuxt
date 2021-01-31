<template>
  <main class="tutuxt" :class="[`tutuxt-${ $store.state.class.bodyClass }`]">
    <Nuxt />
  </main>
</template>

<script lang="ts">
export default {
  name: 'shop'
}
</script>
