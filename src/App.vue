<script>

import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  name: 'App',
  components: {

    AppHeader,
    AppFooter,
 
  }
}
</script>

<template>
  <AppHeader />
 
<main>
  <RouterView />
</main>

  <AppFooter />
</template>

<style>

  main{
    /* padding: 3rem 0; */
    /* background-color: rgb(143, 196, 187); */
    min-height: 100vh;

   
  }

</style>
