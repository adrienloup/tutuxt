<template>
  <component
    :is="is"
    class="button-primary"
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
  name: 'button-primary',
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
      type: Object,
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

.button-primary,
button.button-primary {
  display: inline-block;
  vertical-align: middle;
  padding: .9rem 1.4rem;
  text-align: center;
  background-color: $color-primary;
  border-radius: 2rem;
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-size: .9rem;
  line-height: 1.2;
  color: $color-default;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: $color-secondary;
  }

  &:disabled {
    opacity: .6;

    &:hover {
      background-color: $color-primary;
    }
  }
}
</style>
