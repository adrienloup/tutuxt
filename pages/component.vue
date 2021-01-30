<template>
  <section class="tutuxt-content">

    <h1>
      Component
    </h1>

    <br>

    <h2>
      Button
    </h2>

    <ButtonPrimary
      :href="'https://fr.nuxtjs.org/'"
      :target="'_blank'"
    >
      NuxtJS
    </ButtonPrimary>

    <ButtonPrimary
      :to="'/'"
      nuxt
    >
      TuTuxt
    </ButtonPrimary>

    <ButtonPrimary
      :type="'submit'"
    >
      Submit
    </ButtonPrimary>

    <br><br>

    <h2>
      Slots
    </h2>

    <Slots>
      <template>Slot 1</template>
    </Slots>

    <Slots>
      <template>Slot 2</template>
      <template slot="slotA">Replace A</template>
    </Slots>

    <Slots>
      <template>Slot 3</template>
      <template slot="slotB">Replace B</template>
    </Slots>

  </section>
</template>

<script>
import ButtonPrimary from '@/components/Button/Primary';
import Slots from '@/components/Slots.vue';

export default {
  components: {
    ButtonPrimary,
    Slots
  }
}
</script>
