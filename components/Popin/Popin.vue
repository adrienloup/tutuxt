<template>
  <div
    class="popin"
    :class="[{ active: value_sync }, classList]"
  >

    <div class="popin-inner">
      <slot name="title" />
      <slot name="content" />
      <ButtonPrimary @click="value_sync = false">
        Close
      </ButtonPrimary>
    </div>

    <div
      class="popin-shadow"
      @click="value_sync = false"
    />

  </div>
</template>

<script>
import propSync from '@/mixins/prop-sync.js';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Popin',
  components: { ButtonPrimary },
  mixins: [ propSync() ],
  props: {
    classList: {
      type: String,
      default: null
    }
  },
  watch: {
    async value_sync() {
      if (this.value_sync) {
        document.body.classList.add('popin-active');
      } else {
        document.body.classList.remove('popin-active');
      }
    }
  },
};
</script>

<style lang="scss">
body.popin-active {
  overflow-y: hidden;
}
.popin {
  display: none;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &-shadow {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0%, 0%, .2);
  }

  &-inner {
    position: absolute;
    z-index: 2;
    padding: 2rem;
    width: auto;
    height: auto;
    background-color: #fff;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;

    .top & {
      width: 100%;
      top: 0;
      animation-name: top;
    }

    .right & {
      height: 100%;
      right: 0;
      animation-name: right;
    }

    .bottom & {
      width: 100%;
      bottom: 0;
      animation-name: bottom;
    }

    .left & {
      height: 100%;
      left: 0;
      animation-name: left;
    }
  }

  &.active {
    display: block;
  }
}

@keyframes top {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0%, 0);
  }
}

@keyframes right {
  from {
    -webkit-transform: translate3d( 100%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0%, 0, 0);
  }
}

@keyframes bottom {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0%, 0);
  }
}

@keyframes left {
  from {
    -webkit-transform: translate3d( -100%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0%, 0, 0);
  }
}

</style>
