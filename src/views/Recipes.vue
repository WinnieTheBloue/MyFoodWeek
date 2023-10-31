<script>
import Home from "../components/Home.vue";
import RecipeCard from "../components/RecipeCard.vue";
export default {
  components: {
    Home,
    RecipeCard,
  },
  data() {
    return {
      recipes: {
        1: {
          id: 1,
          title: "Riz Casimir quasi prêt",
          img: "https://thomy.ch/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/bf23d9eb97356dc3cdafb8463bbd93ef.jpg?h=bcb6c8d2&itok=X9kR-PiH",
          ingredients: {
            1: {
              id: 1,
              title: "Riz",
              quantity: 400,
              unit: "gr",
              identifier: "item_1",
            },
            2: {
              id: 2,
              title: "Poulet",
              quantity: 500,
              unit: "gr",
              identifier: "item_2",
            },
            3: {
              id: 3,
              title: "Bananes",
              quantity: 2,
              unit: "pce.",
              identifier: "item_3",
            },
            4: {
              id: 4,
              title: "Sauce curry THOMY",
              quantity: 1,
              unit: "sachet",
              identifier: "item_4",
            },
            5: {
              id: 5,
              title: "Jus d'ananas",
              quantity: 0.5,
              unit: "sacht.",
              identifier: "item_5",
            },
            6: {
              id: 6,
              title: "Huile de noix de coco",
              quantity: 1,
              unit: "btle.",
              identifier: "item_6",
            },
            7: {
              id: 7,
              title: "Amandes effilées",
              quantity: 2,
              unit: "càs",
              identifier: "item_7",
            },
          },
          steps: {
            1: {
              id: 1,
              desc: "Couper les bananes en rondelles, égoutter les morceaux d'ananas et les faire revenir ensemble dans une poêle avec de l'huile de noix de coco. Réserver. ",
              time: 5,
            },
            2: {
              id: 2,
              desc: "Couper le filet de poulet en petits morceaux, les faire revenir dans une poêle à feu vif avec de l'huile de noix de coco, puis les laisser mijoter jusqu'à ce qu'ils soient cuits. ",
              time: 5,
            },
            3: {
              id: 3,
              desc: "Ajouter les fruits poêlés et la sauce curry THOMY à la viande et porter brièvement à ébullition.",
              time: 6,
            },
            4: {
              id: 4,
              desc: "Faire griller les amandes effilées dans une petite poêle jusqu'à ce qu'elles soient bien dorées. ",
              time: 6,
            },
            5: {
              id: 5,
              desc: "Disposer le riz sur quatre assiettes, ajouter le curry de la poêle et garnir chaque plat d'amandes effilées. Si cette préparation manque pour toi d'exotisme, le riz Casimir peut être agrémenté de pêches, de cerises ou de poires. ",
              time: 6,
            },
          },
        },
      },
    };
  },
  mounted() {
    if (!localStorage.recipes) {
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    } else {
      this.recipes = JSON.parse(localStorage.recipes);
    }
  },
};
</script>
<template>
  <Home :title="'Recettes'" :routerLink="'/'"></Home>
  <RecipeCard
    v-for="recipe in recipes"
    :key="recipe.id"
    :recipe="recipe"
  ></RecipeCard>
  <div class="add-item-container">
    <div class="add-item">
      <router-link to="/new-recipe">
        <span class="material-symbols-outlined"> library_add </span>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.add-item {
  background: none;
  justify-content: flex-end;
}
</style>
