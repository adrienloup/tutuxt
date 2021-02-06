<template>
  <article>

    <div v-if="$fetchState.pending">
      <Loader />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching.
    </div>

    <div v-else>

      <Debug>
        route : {{ $route.path }}<br>
        name : {{ $router.currentRoute.name }}<br>
        params : {{ $router.currentRoute.params }}<br>
        fullPath : {{ $router.currentRoute.fullPath }}<br>
        query : {{ $router.currentRoute.query }}
      </Debug>

      <h2>
        Post {{ post.id }}<br>
        {{ post.title }}
      </h2>

      <br>

      <ButtonPrimary @click="goBack">
        Back
      </ButtonPrimary>

    </div>

  </article>
</template>

<script>
import Loader from '@/components/Loader/Loader';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: {
    ButtonPrimary,
    Loader
  },
  data() {
    return {
      post: {}
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
  async fetch() {
    this.post = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`
    ).then(res => res.json());
  }
}
</script>
