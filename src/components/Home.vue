<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    routerLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="home-button">
    <router-link :to="routerLink">
      <span class="material-symbols-outlined"> arrow_back </span>
    </router-link>
    <h1>{{ title }}</h1>
  </div>
</template>
<style scoped>
span {
    width: 50px;
}
.home-button {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #242424;
  padding-bottom: 2rem;
}
h1 {
    width: calc(100% - 100px);
    text-align: center;
}
</style>
