<template>
  <section class="shop">

    <header class="shop-header">

      <ButtonPrimary
        :to="{ name: 'index' }"
      >
        TuTuxt
      </ButtonPrimary>

      <nav class="shop-header-nav">
        <NuxtLink :to="'/shop'">Shop</NuxtLink>
        <NuxtLink :to="'/shop/women'">Women</NuxtLink>
        <NuxtLink :to="'/shop/men'">Men</NuxtLink>
      </nav>

      <div class="shop-header-cart">
        cart
      </div>

    </header>

    <Debug>
      route : {{ $route.path }}<br>
      name : {{ $router.currentRoute.name }}<br>
      params : {{ $router.currentRoute.params }}<br>
      fullPath : {{ $router.currentRoute.fullPath }}<br>
      query : {{ $router.currentRoute.query }}
    </Debug>

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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(15px, 0, 0);
}
//
//.page-move {
//  transition: all .6s ease-in-out .05s;
//}
//.page-enter-active {
//  transition: all .3s ease-out;
//}
//.page-leave-active {
//  transition: all .2s ease-in;
//  position: absolute;
//  z-index: 0;
//}
//.page-enter,
//.page-leave-to {
//  opacity: 0;
//}
//.page-enter {
//  transform: scale(.9);
//}
</style>
