<template>
  <div class="loading">
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/var.scss';

.loading {
  display: inline-block;
  width: 3.2rem;
  height: 3.2rem;
  border: .5rem solid rgba(0, 0, 0, .2);
  border-radius: 50%;
  border-top-color: $color-primary;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
