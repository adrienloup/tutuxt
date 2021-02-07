<template>
  <div
    class="cart-list-item"
    @click="addToCart(item)"
  >
    {{ item.name }}
  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'List',
  components: { ButtonPrimary },
  props: ['item'],
  methods: {
    addToCart(item) {
      this.$emit('update-cart', item);
    }
  }
}
</script>

<style lang="scss">
.cart-list-item {
  cursor: pointer;
}
</style>
