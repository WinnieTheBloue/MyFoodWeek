<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      time: 0,
    };
  },
  mounted() {
    const steps = this.recipe.steps;

    for (const key in steps) {
      if (steps.hasOwnProperty(key)) {
        this.time += steps[key].time;
      }
    }
  },
};
</script>
<template>
  <div class="recipe-card">
    <div class="img">
      <img :src="recipe.img" alt="" />
    </div>
    <div class="det">
      <h2>{{ recipe.title }}</h2>
      <p>
        <span class="material-symbols-outlined"> timer </span> {{ time }} min.
      </p>
    </div>
  </div>
</template>
<style scoped>
.recipe-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff22;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
.recipe-card .img {
  width: 70px;
  height: 70px;
  background-color: #ccc;
  overflow: hidden;
  border-radius: 0.5rem;
}
.recipe-card .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.recipe-card .det {
  width: calc(100% - 100px);
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
h2 {
  font-size: 1em;
}
p {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
</style>
