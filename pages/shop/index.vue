<template>

  <article
    v-if="products && products.length"
    class="shop-content"
  >

    <h2>Index</h2>

    <ShopProduct
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :index="index"
    />

  </article>

  <div v-else>
    <Loader />
  </div>

</template>

<script>
import ShopProduct from '@/components/Shop/Product';
import Loader from "@/components/Loader/Loader";

export default {
  components: { Loader, ShopProduct },
  computed: {
    products() {
      return this.$store.state.shop.products;
    }
  }
}
</script>
