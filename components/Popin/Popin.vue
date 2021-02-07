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
  padding: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    padding: 0;
  }

  &-shadow {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0%, 0%, .4);
    animation: .8s appear;
  }

  &-inner {
    position: relative;
    z-index: 2;
    padding: 2rem;
    width: 100%;
    max-width: calc(375px);
    height: auto;
    background-color: #fff;
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(.43, .195, .02, 1);

    .top & {
      animation-name: top;
    }

    .right & {
      animation-name: right;
    }

    .bottom & {
      animation-name: bottom;
    }

    .left & {
      animation-name: left;
    }
  }

  &.active {
    display: flex;
  }
}

@keyframes top {
  from {
    -webkit-transform: translate3d(0, -200%, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes right {
  from {
    -webkit-transform: translate3d( 200%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes bottom {
  from {
    -webkit-transform: translate3d(0, 200%, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes left {
  from {
    -webkit-transform: translate3d( -200%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>
