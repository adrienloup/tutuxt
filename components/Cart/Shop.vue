<template>
  <div class="cart">

    <Cart
      :cart="cart"
      :total="total"
      @empty-cart="emptyCart"
    />

    <List
      v-for="item in items"
      :item="item"
      :key="item.id"
      @update-cart="updateCart"
    />

  </div>
</template>

<script>
import Cart from '@/components/Cart/Cart';
import List from '@/components/Cart/List';

export default {
  name: 'Shop',
  components: { Cart, List },
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherries' },
        { id: 4, name: 'Peach' },
        { id: 5, name: 'Orange' }
      ],
      cart: [],
      total: 0
    }
  },
  methods: {
    updateCart(item) {
      this.cart.push(item);
      this.total = this.cart.length;
    },
    emptyCart() {
      this.cart = [];
      this.total = 0;
    }
  }
}
</script>
