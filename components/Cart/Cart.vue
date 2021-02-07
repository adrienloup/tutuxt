<template>
  <div>

    {{ carted }}

    <div v-if="cart.length">
      <div v-for="item in cart">
        {{ item.name }}
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
      this.$emit('empty-cart', item);
    }
  },
  computed: {
    carted() {
      for (const key of this.cart) {
        // console.log(key.id);
        console.log(this.cart.filter(c => c.id === key.id).length);
        if (this.cart.filter(c => c.id === key.id).length > 1) {
          console.log('ok');
        }
      }
    }
  }
}
</script>
