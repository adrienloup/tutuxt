<template>
  <section class="tutuxt-content">

    <NuxtLogo
      v-bind="logo"
    />

    <h1>
      TuTuxt
    </h1>

  </section>
</template>

<script lang="ts">
import NuxtLogo from '@/components/Logo/Nuxt.vue';

export default {
  components: { NuxtLogo },
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
