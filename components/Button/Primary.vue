<template>
  <component
    :is="is"
    class="ButtonPrimary"
    :href="href"
    :to="to"
    :type="type"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    is() {
      if (this.to && this.nuxt) {
        return 'nuxt-link';
      }
      if (this.to) {
        return 'router-link';
      }
      if (this.href) {
        return 'a';
      }
      return 'button';
    }
  }
}
</script>

<style lang="scss">

</style>
