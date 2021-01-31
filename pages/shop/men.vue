<template>
  <div>

    <h2>
      Men
    </h2>

    {{ menProducts }}

  </div>
</template>

<script>
export default {
  computed: {
    menProducts() {
      return this.$store.getters['shop/men'];
    }
  }
}
</script>
