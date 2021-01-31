<template>
  <section class="tutuxt-content">

    <h1>
      Page
    </h1>

    <br>

    <nav>
      <ButtonPrimary :to="'/page/page1'">Page 1</ButtonPrimary>
      <ButtonPrimary :to="'/page/page2'">Page 2</ButtonPrimary>
    </nav>

    <br>

    <NuxtChild />

  </section>
</template>
<script>
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: { ButtonPrimary }
}
</script>

<style lang="scss" scoped>
$t-duration: 600ms;
$t-delay: 200ms;

.page-enter-active,
.page-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #00C58E;
  }

  &::after {
    top: 50%;
    background-color: #00C58E;
  }
}

.page-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.page-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.page-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.page-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.page-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.page-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
