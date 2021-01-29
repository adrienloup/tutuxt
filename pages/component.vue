<template>
  <section class="tutuxt-content">

    <Logo
      v-bind="logo"
    />

    <h1>
      TuTuxt
    </h1>

  </section>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo
  },
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
