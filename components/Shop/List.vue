<template>
  <div class="shop-item">
    <h4>{{ item.name }}</h4>
    <ButtonPrimary @click="addToCart(item)">
      Add
    </ButtonPrimary>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'List',
  components: { ButtonPrimary },
  props: ['item'],
  methods: {
    addToCart(item) {
      this.$emit('update-cart', item);
    }
  }
}
</script>
