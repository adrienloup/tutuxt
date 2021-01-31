<template>
  <section class="tutuxt-content">

    <h1>
      Blog
    </h1>

    <br>

    <div v-if="!posts.length">
      <Loader />
    </div>

    <div v-else>

      <Search
        :search="search"
        :list="posts"
        :slug-part="slug"
        @refresh="refresh()"
      />

    </div>

  </section>
</template>

<script>
import Search from '@/components/Blog/Search';
import Loader from '@/components/Loader/Loader';

export default {
  components: { Loader, Search },
  data() {
    return {
      posts: [],
      slug: 'post-slug',
      search: ''
    }
  },
  created() {
    this.refresh();
  },
  methods: {
    async refresh() {
      this.posts = [];
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
          this.posts = posts
        })
      ;
    }
  }
}
</script>

<style lang="scss">
.post {
  padding-top: 1rem;

  &:last-child {
    padding-bottom: 2rem;
  }
}
</style>
