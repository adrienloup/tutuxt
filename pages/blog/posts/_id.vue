<template>
  <article>

    <div v-if="$fetchState.pending">
      <Loader />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching.
    </div>

    <div v-else>

      <h1>Post {{ post.id }}</h1>

      <br>

      <ButtonPrimary @click="goBack">
        Back
      </ButtonPrimary>

      <br>
      <br>

      <h2>{{ post.title }}</h2>

      <Debug>
        route.path : {{ $route.path }}<br>
      </Debug>

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
      `https://jsonplaceholder.typicode.com/photos/${this.$route.params.slug}`
    ).then(res => res.json());
  }
}
</script>
