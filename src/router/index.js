import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Recipes from '../views/Recipes.vue'
import NewRecipe from '../views/NewRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes,
  },
  {
    path: '/new-recipe',
    name: 'NewRecipe',
    component: NewRecipe,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
