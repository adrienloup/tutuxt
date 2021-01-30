<template>
  <div>
    <h3>Cart {{ total }}</h3>
    <ButtonPrimary @click="emptyCart(cart)">
      Clear
    </ButtonPrimary>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Cart',
  components: { ButtonPrimary },
  props: ['cart', 'total'],
  methods: {
    emptyCart(item) {
      this.$emit('empty-cart', item);
    }
  }
}
</script>
