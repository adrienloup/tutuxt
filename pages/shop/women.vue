<template>
  <div>

    <h2>
      Women
    </h2>

    {{ womenProducts }}

  </div>
</template>

<script>
export default {
  computed: {
    womenProducts() {
      return this.$store.getters['shop/women'];
    }
  }
}
</script>
