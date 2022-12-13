<template>
    <div class="columns is-multilined">
        <div class="column is-desktop is-1"></div>
        <div
            class="column box is-desktop is-4"
            v-for="post in post_list"
            v-bind:key="post.id"
        >
            <h3 class="is-size-4">{{ post.title }}</h3>
            <img 
                class="image"
                v-if="post.elements.filter(x => x.thumbnail !== null)"
                v-bind:src="post.elements.filter(x => x.thumbnail !== null)[0].get_thumbnail"
            />
            <p class="is-size-6 mt-2 has-text-grey">{{ post.short_desc }}</p>
            <router-link v-bind:to="post.get_absolute_url" class="button is-dark mt-4">View Details</router-link>

        </div>
        <div class="column is-desktop is-1"></div>
    </div>
</template>

<script>
    export default {
        name: 'PostsList',
        props: [
            'post_list'
        ]
    }
</script>


<style scoped>
  .image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
