<template>
  <div />
</template>

<script>
export default {
  name: 'Observer',
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([ entry ]) => {
      if (entry && entry.isIntersecting) {
        this.intersect(entry.intersectionRatio);
      }
    });
    this.observer.observe(this.$el);
  },
  methods: {
    intersect() {
      this.$emit('observer');
    }
  }
};
</script>
