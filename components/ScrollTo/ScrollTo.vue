<template>
  <div>

    {{ active }}

    <Observer @observer="observer()" />

    <div
      class="scroll-to"
      :class="{ active: active }"
      @click="onClick()"
    />

  </div>
</template>

<script>
import Observer from '@/components/ScrollTo/Observer';

export default {
  name: 'ScrollTo',
  components: { Observer },
  data() {
    return {
      active: false,
      scroll: false
    };
  },
  mounted() {
    this.onScroll = () => {
      this.scroll = document.documentElement.scrollTop || window.pageYOffset;
      if (this.scroll === 0) {
        this.active = false;
      }
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
    observer() {
      this.active = true;
    },
    onClick() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss">
.scroll-to {
  width: 4rem;
  height: 4rem;
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: red;
  cursor: pointer;

  &.active {
    display: block;
  }
}
</style>
