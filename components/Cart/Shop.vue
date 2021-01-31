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
import List from '@/components/Shop/List';
import Cart from '@/components/Shop/Cart';

export default {
  name: 'Shop',
  components: {
    List,
    Cart
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Banana' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'Apple' }
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
