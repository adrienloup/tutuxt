<template>
  <div class="shop-product" :class="{ sale: product.sale }">
    <div class="img">
      <div @click="addItem">
        tutu
      </div>
    </div>
    <div class="caption">
      <span class="title">{{ product.name }}</span>
      <span class="sale" v-if="product.sale">Sale</span>
      <span class="price">{{ product.price | usdollar }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.product);
    }
  }
}
</script>
