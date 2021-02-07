<template>
  <section class="tutuxt-content">

    <h1>
      Not found
    </h1>

    <ButtonPrimary :to="{ name: 'index' }">
      TuTuxt
    </ButtonPrimary>

  </section>
</template>

<script lang="ts">
import ButtonPrimary from '~/components/Button/Primary.vue';

export default {
  name: 'Page404',
  components: { ButtonPrimary },
  data() {
    return {
      logo: {
        width: '115',
        height: '87'
      }
    }
  }
}
</script>
