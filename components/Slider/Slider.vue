<template>
  <div class="slider">
   <Slide
     class="slider-slide"
     v-for="(slide, key) in slides"
     :key="key"
     :class="{ 'active': key === index }"
   >
     <NuxtLogo
       :width="'185'"
       :height="'140'"
     />
   </Slide>

  <ul class="slider-bubbles">
    <li
      v-for="bubble in slidesCount"
      :key="bubble.id"
      :class="{ 'active': bubble-1 === index }"
      @click.prevent="goto(bubble-1)"
    />
  </ul>

  <ButtonPrimary @click.prevent="prev">Prev</ButtonPrimary>
  <ButtonPrimary @click.prevent="next">Next</ButtonPrimary>

 </div>
</template>

<script>
import Slide from '@/components/Slider/Slide';
import NuxtLogo from "@/components/Logo/Nuxt";
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Slider',
  components: {
    Slide,
    NuxtLogo,
    ButtonPrimary
  },
  data() {
    return {
      index: 0
    };
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    slides(slides) {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1;
      }
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
    visible() {
      return this.index === this.$parent;
    }
  },
  methods: {
    next() {
      this.index++;
      if(this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      if(this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    },
    goto(index) {
      this.index = index;
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/var.scss';

.slider {

  &-bubbles {
    list-style: none;
    display: flex;
    padding: .5rem;

    li {
      width: 1rem;
      height: 1rem;
      margin-right: .5rem;
      border-radius: 50%;
      background-color: $color-primary;

      &.active {
        background-color: $color-secondary;
      }
    }
  }
}
</style>
