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
