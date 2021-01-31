<template>
  <div>

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

  </div>
</template>

<script>
import Search from '@/components/Blog/Search';
import Loader from '@/components/Loader/Loader';

export default {
  components: { Loader, Search },
  data() {
    return {
      posts: [],
      slug: 'blog-posts-id',
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
