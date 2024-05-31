<script>

import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';



export default {
  name: 'App',
  components: {

    AppHeader,
 
  }
}
</script>

<template>
  <AppHeader />
 
<main>
  <RouterView />
</main>


</template>

<style></style>
