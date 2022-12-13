
<template>
  <div class="category">
    

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Posts</h2>
      </div>

      <PostsList
        v-model:post_list="categoryPosts"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'CategoryView',
  data() {
    return {
      categoryPosts: [],
      categoryTitle: ''
    }
  },
  components: {
    PostsList
  },
  mounted() {
    this.getCategoryPosts()

    document.title = 'Home'+ ' - Corolla Yanki'
  },
  methods: {
    async getCategoryPosts() {

      const category_slug = this.$route.params.category_slug

      await axios
        .get(`/api/posts/${category_slug}`)
        .then(response => {
          this.categoryPosts = response.data.posts
          this.categoryTitle = response.data.name

          document.title = this.categoryTitle + ' - Corolla Yanki'
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
