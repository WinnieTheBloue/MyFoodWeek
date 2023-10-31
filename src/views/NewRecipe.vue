<script>
import Home from "../components/Home.vue";


export default {
  components: {
    Home,
  },
}
</script>
<template>
    <Home :title="'Nouvelle recette'" :routerLink="'/recipes'"></Home>
</template>