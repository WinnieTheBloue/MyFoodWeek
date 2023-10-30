<script setup></script>

<template>
  <div class="utilities">
    <router-link to="/list">
        <button class="utility-button">
      <span class="material-symbols-outlined"> list_alt </span>Liste de courses
    </button>
    </router-link>
    <button class="utility-button">
      <span class="material-symbols-outlined"> menu_book </span>Recettes
    </button>
  </div>
</template>

<style scoped>
.utilities {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  padding: 2rem 0;
  border-bottom: solid 2px #ffffffde;
}
.utility-button {
  padding: 0;
  width: 100%;
  background: none;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
span {
  color: #ffffffde;
}
</style>
