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
        { id: '1', name: 'Apple', quantity: 1 },
        { id: '2', name: 'Banana', quantity: 1 },
        { id: '3', name: 'Cherries', quantity: 1 },
        { id: '4', name: 'Peach', quantity: 1 },
        { id: '5', name: 'Orange', quantity: 1 }
      ],
      cart: [],
      total: 0
    }
  },
  methods: {
    updateCart(item) {
      const itemInCart = this.cart.filter(i => i.id === item.id);
      if(!itemInCart.length) {
        this.cart.push(item);
      } else {
        item.quantity++;
      }
      this.total = this.cart.length;
    },
    emptyCart() {
      this.items.filter(i => i.id).map(i => i.quantity = 1);
      this.cart = [];
      this.total = 0;
    }
  }
}
</script>
