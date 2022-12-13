<template>
  <div class="home">
    <section class="columns is-multilined">
      <div class="has-text-centered column is-12">
        <p class="title mb-6">
          Welcome to Corolla Yanki
        </p>
        <p class="subtitle">
          Corolla is the number one car in the world!
        </p>
      </div>
      <h2 class="is-size-2 column has-text-centered is-12">Latest Posts</h2>
    </section>
    <PostsList
      v-model:post_list="latestPosts"
    />
    
  </div>
</template>

<script>
import axios from 'axios'
import PostsList from '@/components/PostsList.vue'
import { useIsLoadingStore } from '@/stores/isLoading'

export default {
  name: 'HomeView',
  data() {
    return {
      latestPosts: []
    }
  },
  components: {
    PostsList
  },
  mounted() {
    this.getLatestPosts()

    document.title = 'Home'+ ' - Corolla Yanki'
  },
  methods: {
    async getLatestPosts() {



      await axios
        .get('/api/posts/')
        .then(response => {
          this.latestPosts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }
</style>
