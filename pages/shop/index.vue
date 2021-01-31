<template>
  <div>

    <h2>
      Index
    </h2>

    {{ products }}

  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.shop.products;
    }
  }
}
</script>
