<template>
  <div class="post">


    <div class="">
      <Post
        v-model:post="post"
      />


    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post.vue'

export default {
  name: 'PostView',
  data() {
    return {
      post: []
    }
  },
  components: {
    Post
  },
  mounted() {
    this.getPost()

    document.title = 'Home'+ ' - Corolla Yanki'
  },
  methods: {
    async getPost() {
      const category_slug = this.$route.params.category_slug
      const post_slug = this.$route.params.post_slug

      await axios
        .get(`/api/posts/${category_slug}/${post_slug}`)
        .then(response => {
          this.post = response.data

          document.title = this.post.title + ' - Corolla Yanki'
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
