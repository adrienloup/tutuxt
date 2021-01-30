<template>
  <section class="tutuxt-content">

    <h2>
      Slider
    </h2>

    <Slider :slides="[{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }]" />

    <br>
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
      Type
    </ButtonPrimary>

    <br>
    <br>
    <br>

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
import Slider from '@/components/Slider/Slider';
import ButtonPrimary from '@/components/Button/Primary';
import Slots from '@/components/Slots';

export default {
  components: {
    Slider,
    ButtonPrimary,
    Slots
  }
}
</script>
