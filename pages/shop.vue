<template>
  <section class="page-shop">

    <h1>
      Shop
    </h1>

    <button-primary
      to="/"
    >
      TuTuxt
    </button-primary>

    <nav>
      <NuxtLink :to="'/shop/women'">Women</NuxtLink>
      <NuxtLink :to="'/shop/men'">Men</NuxtLink>
    </nav>

    <NuxtChild />

  </section>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: { ButtonPrimary },
  // transition: 'tutu2',
  layout (context) {
    return 'shop'
  }
}
</script>

<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .5s
}

.page-enter, .page-leave-active {
  opacity: 0
}
</style>
