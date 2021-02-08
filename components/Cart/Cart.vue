<template>
  <div>

    <div v-if="cart.length">
      <div v-for="item in cart">
        {{ item.name }}
        {{ item.quantity }}
      </div>
    </div>

    <h3>Total {{ total }}</h3>

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
      this.carted = [];
      this.$emit('empty-cart', item);
    }
  }
}
</script>
