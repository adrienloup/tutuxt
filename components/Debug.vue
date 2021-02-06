<template>
  <div v-if="display" class="debug">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Debug',
  data() {
    return {
      display: false
    };
  },
  mounted() {
    const debug = this.$router?.currentRoute?.query['debug'];
    if (debug === '1') {
      window.localStorage.setItem('debug', '1');
    } else if (debug === '0') {
      window.localStorage.removeItem('debug');
    }
    this.display = !!window.localStorage.getItem('debug');
  }
};
</script>

<style lang="scss">
.debug {
  margin-bottom: 1rem;
  padding: .5rem 1rem;
  background-color: hsla(0, 100%, 50%, .1);
  font-size: .8rem;
  color: #f00;
}
</style>
