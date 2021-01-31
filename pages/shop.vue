<template>
  <section class="shop">

    <header class="shop-header">

      <button-primary
        to="/"
      >
        TuTuxt
      </button-primary>

      <nav>
        <NuxtLink :to="'/shop/women'">Women</NuxtLink>
        <NuxtLink :to="'/shop/men'">Men</NuxtLink>
      </nav>

    </header>

    <NuxtChild />

  </section>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: { ButtonPrimary },
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
