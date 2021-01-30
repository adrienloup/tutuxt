<template>
  <div
    class="sticky"
    :class="{ 'is-active': sticky }"
    :style="{ '--banner-height': height + 'px' }"
  >
    <div ref="sticky" class="sticky-inner">
      {{ sticky }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StickySticky',
    data() {
      return {
        sticky: false,
        onScroll: null,
        height: 0,
      };
    },
    mounted() {
      this.onScroll = () => {
        this.offset = this.$el.offsetTop;
        this.scroll = document.documentElement.scrollTop || window.pageYOffset;
        (this.scroll >= this.offset) ? this.takeOn() : this.takeOff();
      };
      window.addEventListener('scroll', this.onScroll);
    },
    destroyed() {
      if (this.onScroll) {
        window.removeEventListener('scroll', this.onScroll);
        this.onScroll = null;
      }
    },
    methods: {
      takeOn() {
        if (!this.sticky) {
          this.height = this.$refs['sticky'].clientHeight;
          this.sticky = true;
        }
      },
      takeOff() {
        if (this.sticky) {
          this.sticky = false;
        }
      }
    }
  };
</script>

<style lang="scss">
@import './assets/scss/var.scss';

.sticky {
  width: 100%;
  backface-visibility: hidden;

  &-inner {
    padding: 1rem;
    background-color: $color-primary;
    color: $color-default;
  }

  &.is-active {

    &::before {
      content: ' ';
      display: block;
      width: 100%;
      height: var(--banner-height);
    }

    .sticky {

      &-inner {
        position: fixed;
        z-index: 2;
        top: 0;
        right: 0;
        left: 0;
      }
    }
  }
}
</style>
