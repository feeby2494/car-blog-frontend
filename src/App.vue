<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useIsLoadingStore } from '@/stores/isLoading'
</script>

<template>
  <div class="wrapper">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-start">
         
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <RouterLink to="/">Home</RouterLink>
          </div>
          <div class="navbar-item">
            <RouterLink to="/8th_gen_corolla">8th Gen Corolla</RouterLink>
          </div>
          <div class="navbar-item">
            <RouterLink to="/about">About</RouterLink>
          </div>
        </div>
      </div>
    </nav>
   
    <section class="section">
      <RouterView />
    </section>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
</template>

<style lang="scss">

</style>
