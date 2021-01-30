<template>
  <component
    :is="is"
    class="ButtonPrimary"
    :href="href"
    :target="target"
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
@import './assets/scss/var.scss';

.ButtonPrimary,
button.ButtonPrimary {
  display: inline-block;
  vertical-align: middle;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: $color-primary;
  border-radius: 2rem;
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2;
  color: $color-default;
  cursor: pointer;
  outline: none;

  &.nuxt-link-exact-active {
    background-color: $color-secondary;
  }
}
</style>
