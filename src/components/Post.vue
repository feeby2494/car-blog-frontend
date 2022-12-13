<template>
  <div class="columns is-multilined">
    <div class="column is-desktop is-1"></div>
    <div class='box column is-10 is-desktop is-centered'>
      <div class=''>
        <h2>{{post.title}}</h2>
        <div
          class=""
          v-for="element in post.elements"
          v-bind:key="element.id"
        >
          <div
            class=""
            v-if="element.innerHtml"
            v-html="element.innerHtml"
          >
          </div>
          <figure
            class="image "
            v-if="element.image"
          >
            <img
              v-bind:src="element.get_thumbnail"
            />
          </figure>
        </div>
        <router-link to="/" class="button is-dark mt-4">Back to Home</router-link>
      </div>
    </div>
    <div class="column is-desktop is-1"></div>
  </div>
</template>

<script>
    export default {
        name: 'Post',
        props: [
            'post'
        ]
    }
</script>

<style scoped>
  .image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: auto;
  }

  .image iframe {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .iframe-container {
    position: relative;
    padding-bottom: 56.5%;
    height: 0;    
  }
  .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
</style>
